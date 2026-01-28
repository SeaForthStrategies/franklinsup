import type { Metadata } from "next";

import {
  EndorsementsGrid,
  ORGANIZATION_ENDORSEMENTS,
  PEOPLE_ENDORSEMENTS,
} from "@/components/sections/EndorsementsGrid";
import { EndorsementQuote } from "@/components/sections/EndorsementQuote";
import { EndorsementsTopAnimations } from "@/components/sections/EndorsementsTopAnimations.client";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const revalidate = 60;

type WPEndorsement = {
  id: number;
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
  const base = process.env.WORDPRESS_URL;
  if (!base) return [];

  try {
    const url = `${base}/wp-json/wp/v2/endorsement?per_page=100`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) return [];

    const data = (await res.json()) as WPEndorsement[];

    data.sort((a, b) => (a.acf?.sort_order ?? 9999) - (b.acf?.sort_order ?? 9999));

    return data;
  } catch {
    return [];
  }
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
    wpEndorsements.map(async (e) => {
      const name = e.acf?.endorser_name || e.title.rendered;
      const org = e.acf?.endorser_org ?? "";
      const title = org || (e.acf?.endorser_title ?? "");

      const mediaId = e.acf?.headshot;
      if (!mediaId) return null;

      try {
        const base = process.env.WORDPRESS_URL;
        const mediaRes = await fetch(`${base}/wp-json/wp/v2/media/${mediaId}`, {
          next: { revalidate: 60 },
        });
        if (!mediaRes.ok) return null;

        const media = await mediaRes.json();
        const imageUrl = media?.source_url as string | undefined;
        if (!imageUrl) return null;

        const imageAlt = (media?.alt_text as string | undefined) || name;

        return {
          id: `wp-${e.id}`,
          name,
          title,
          organization: org,
          imageUrl,
          imageAlt,
        };
      } catch {
        return null;
      }
    })
  );

  const wpPeopleEndorsementsClean = wpPeopleEndorsements.filter(Boolean) as any[];

  const combinedPeopleEndorsements = [
    ...PEOPLE_ENDORSEMENTS,
    ...wpPeopleEndorsementsClean,
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-primary-900 py-14 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Endorsements
            </h1>

            <EndorsementsTopAnimations people={PEOPLE_ENDORSEMENTS} organizations={ORGANIZATION_ENDORSEMENTS} />
          </div>
        </div>
      </section>

      <SectionDivider variant="wave1" className="opacity-70" />

      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_0%,rgba(239,68,68,.18),transparent_62%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <EndorsementsGrid endorsements={combinedPeopleEndorsements} variant="people" />

          <div className="mt-14 sm:mt-16">
            <h2 className="text-center text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Organizations
            </h2>
            <div className="mt-6 sm:mt-8">
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
