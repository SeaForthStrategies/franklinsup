import type { Metadata } from "next";

import { EndorsementsGrid, ORGANIZATION_ENDORSEMENTS } from "@/components/sections/EndorsementsGrid";
import type { Endorsement } from "@/components/sections/EndorsementsGrid";
import { EndorsementQuote } from "@/components/sections/EndorsementQuote";
import { EndorsementsTopAnimations } from "@/components/sections/EndorsementsTopAnimations.client";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const revalidate = 60;

type WPEndorsement = {
  id: number;
  date: string;
  title: { rendered: string };
  acf: {
    endorser_name?: string;
    endorser_title?: string;
    endorser_org?: string;
    sort_order?: number;
    headshot?: unknown;
  };
};

async function getWPEndorsements(): Promise<WPEndorsement[]> {
  const base = process.env.WORDPRESS_URL ?? "https://franklinforsupervisor.com";

  const endpoints = [
    `${base}/wp-json/wp/v2/endorsement?per_page=100&_fields=id,date,title,acf&acf_format=standard`,
    `${base}/wp-json/wp/v2/endorsements?per_page=100&_fields=id,date,title,acf&acf_format=standard`,
  ];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, { next: { revalidate: 60 } });

      if (!res.ok) {
        if (process.env.NODE_ENV !== "production") {
          console.log("[endorsements] fetch failed", { url, status: res.status });
        }
        continue;
      }

      const data = (await res.json()) as WPEndorsement[];

      // Keep endorsements in creation order: oldest first, newest last.
      data.sort((a, b) => {
        const aTime = Number.isNaN(Date.parse(a.date)) ? 0 : Date.parse(a.date);
        const bTime = Number.isNaN(Date.parse(b.date)) ? 0 : Date.parse(b.date);
        if (aTime !== bTime) return aTime - bTime;
        return a.id - b.id;
      });

      if (process.env.NODE_ENV !== "production") {
        console.log("[endorsements] fetch success", { url, count: data.length });
      }

      return data;
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.log("[endorsements] fetch error", { url, error });
      }
    }
  }

  return [];
}

type ExtractedHeadshot = {
  mediaId?: number;
  imageUrl?: string;
};

function extractHeadshot(raw: unknown): ExtractedHeadshot {
  if (!raw) return {};

  const normalize = (value: unknown): ExtractedHeadshot => {
    if (!value) return {};

    if (typeof value === "number") {
      return { mediaId: value };
    }

    if (typeof value === "string") {
      const trimmed = value.trim();
      if (!trimmed) return {};
      const numeric = Number.parseInt(trimmed, 10);
      if (!Number.isNaN(numeric) && `${numeric}` === trimmed) {
        return { mediaId: numeric };
      }
      return { imageUrl: trimmed };
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return {};
      return normalize(value[0]);
    }

    if (typeof value === "object") {
      const obj = value as Record<string, unknown>;
      const idCandidate = obj.id ?? obj.ID;
      const urlCandidate = (obj.url ?? obj.source_url) as unknown;

      const byId = normalize(idCandidate);
      const byUrl = normalize(urlCandidate);

      return {
        mediaId: byId.mediaId ?? byUrl.mediaId,
        imageUrl: byUrl.imageUrl ?? byId.imageUrl,
      };
    }

    return {};
  };

  return normalize(raw);
}

export const metadata: Metadata = {
  title: "Endorsements – Support my campaign",
  openGraph: {
    title: "Endorsements – Support my campaign",
    url: "https://franklinforsupervisor.com/endorsements",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default async function EndorsementsPage() {
  const wpEndorsements = await getWPEndorsements();

  // Map WP items into the same shape your EndorsementsGrid expects
  // (no CSS changes; just data)
  const wpPeopleEndorsements = await Promise.all(
    wpEndorsements.map(async (e): Promise<Endorsement | null> => {
      const name = e.acf?.endorser_name || e.title.rendered;
      const org = e.acf?.endorser_org ?? "";
      const title = org || (e.acf?.endorser_title ?? "");

      const { mediaId, imageUrl } = extractHeadshot(e.acf?.headshot);

      // If ACF returns a direct URL, use it without an extra media fetch.
      if (imageUrl) {
        return {
          id: `wp-${e.id}`,
          name,
          title,
          imageUrl,
          imageAlt: name,
        };
      }

      if (typeof mediaId !== "number") {
        return null;
      }

      try {
        const base = process.env.WORDPRESS_URL ?? "https://franklinforsupervisor.com";

        const mediaRes = await fetch(`${base}/wp-json/wp/v2/media/${mediaId}`, {
          next: { revalidate: 60 },
        });
        if (!mediaRes.ok) return null;

        const media = await mediaRes.json();
        const fetchedUrl = media?.source_url as string | undefined;
        if (!fetchedUrl) return null;

        const imageAlt = (media?.alt_text as string | undefined) || name;

        return {
          id: `wp-${e.id}`,
          name,
          title,
          imageUrl: fetchedUrl,
          imageAlt,
        };
      } catch {
        return null;
      }
    })
  );

  const wpPeopleEndorsementsClean = wpPeopleEndorsements.filter(
    (endorsement): endorsement is Endorsement => Boolean(endorsement),
  );

  return (
    <>
      <section className="relative overflow-hidden bg-primary-900 py-10 text-white sm:py-14 md:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Endorsements
            </h1>

            <EndorsementsTopAnimations
              people={wpPeopleEndorsementsClean}
              organizations={ORGANIZATION_ENDORSEMENTS}
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="wave1" className="opacity-70" />

      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_0%,rgba(239,68,68,.18),transparent_62%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-14 md:py-20 lg:px-8 lg:py-24">
          <EndorsementsGrid endorsements={wpPeopleEndorsementsClean} variant="people" />

          <div className="mt-10 sm:mt-14 md:mt-16">
            <h2 className="text-center text-xl font-black uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
              Organizations
            </h2>
            <div className="mt-5 sm:mt-6 md:mt-8">
              <EndorsementsGrid endorsements={ORGANIZATION_ENDORSEMENTS} variant="orgs" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave2" className="opacity-70" />

      <EndorsementQuote
        quote="Mayor Franklin is a common sense thinker who doesn’t take no for an answer. I’ve known him for 21 years. He’s a problem solver who gets to the source of the problem and finds solutions. He believes in accountability and transparency. He’s got my vote!"
        author="Congressman Darrell Issa"
        imageUrl="https://franklinforsupervisor.com/wp-content/uploads/2025/02/272330064_479135523575125_5456602968414208822_n.jpg"
        tone="dark"
      />
    </>
  );
}
