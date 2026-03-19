import type { Metadata } from "next";

import { EndorsementsGrid } from "@/components/sections/EndorsementsGrid";
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
    endorser_name?: unknown;
    endorser_title?: unknown;
    endorser_org?: unknown;
    sort_order?: number;
    headshot?: unknown;
    category?: unknown;
  };
};

/** Normalize ACF value to a non-empty string (WP/ACF can return objects or other types). */
function acfString(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed;
  }
  if (typeof value === "number") return String(value).trim();
  if (typeof value === "boolean") return value ? "true" : "false";

  if (Array.isArray(value)) {
    // ACF sometimes returns arrays for text fields depending on configuration.
    for (const item of value) {
      const s = acfString(item);
      if (s) return s;
    }
    return "";
  }

  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;

    // Try common label-ish keys first.
    const commonKeys = ["value", "label", "name", "title", "text", "display", "rendered"];
    for (const key of commonKeys) {
      const s = acfString(obj[key]);
      if (s) return s;
    }

    // Fallback: scan values for the first non-empty string.
    for (const v of Object.values(obj)) {
      const s = acfString(v);
      if (s) return s;
    }

    return "";
  }
  return "";
}

/** Only treat as "Organizations" when category is that, org is set, and there is no person name. Use both ACF endorser_name and post title so person endorsements (name in title only) never appear under Organizations. */
function sectionCategory(
  acf: WPEndorsement["acf"],
  titleRendered: string,
): "Leaders" | "Organizations" | undefined {
  // WordPress ACF sometimes returns `category` as numeric codes (e.g. [8], [9]) rather than strings
  // like "leaders"/"organizations".
  const categoryCode = acfString(acf?.category).toLowerCase();
  const personNameFromAcf = acfString(acf?.endorser_name);
  // For distinguishing people vs organizations, rely on ACF person-name field.
  // Post titles are not a reliable signal here because they can be org names.
  const hasPersonName = personNameFromAcf.length > 0;

  // Category codes observed from WP payload:
  // - "9" => Leaders
  // - "8" => Organizations
  if (categoryCode === "9") return "Leaders";

  // Organizations section only: numeric category code + no person name in ACF.
  if (categoryCode === "8" && !hasPersonName) return "Organizations";

  // All other (non-organization) endorsements should be treated as leaders/people
  // because the UI shows only Leaders + Organizations.
  return "Leaders";
}

const WP_PER_PAGE = 100;

async function fetchOnePage(
  baseUrl: string,
  page: number,
): Promise<{ data: WPEndorsement[]; total: number }> {
  const url = `${baseUrl}&page=${page}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) return { data: [], total: 0 };
  const data = (await res.json()) as WPEndorsement[];
  const total = parseInt(res.headers.get("x-wp-total") ?? "0", 10) || data.length;
  return { data, total };
}

async function getWPEndorsements(): Promise<WPEndorsement[]> {
  const base = process.env.WORDPRESS_URL ?? "https://franklinforsupervisor.com";
  const fields = "id,date,title,acf";
  const endpoints = [
    `${base}/wp-json/wp/v2/endorsement?per_page=${WP_PER_PAGE}&_fields=${fields}&acf_format=standard`,
    `${base}/wp-json/wp/v2/endorsements?per_page=${WP_PER_PAGE}&_fields=${fields}&acf_format=standard`,
  ];

  for (const baseUrl of endpoints) {
    try {
      const all: WPEndorsement[] = [];
      let page = 1;
      let total = 1;

      while (all.length < total) {
        const { data, total: headerTotal } = await fetchOnePage(baseUrl, page);
        if (data.length === 0 && page === 1) break;
        all.push(...data);
        if (headerTotal > 0) total = headerTotal;
        else total = all.length;
        if (data.length < WP_PER_PAGE) break;
        page += 1;
      }

      if (all.length === 0) continue;

      all.sort((a, b) => {
        const aTime = Number.isNaN(Date.parse(a.date)) ? 0 : Date.parse(a.date);
        const bTime = Number.isNaN(Date.parse(b.date)) ? 0 : Date.parse(b.date);
        if (aTime !== bTime) return aTime - bTime;
        return a.id - b.id;
      });

      if (process.env.NODE_ENV !== "production") {
        console.log("[endorsements] fetch success", { url: baseUrl, count: all.length });
      }

      return all;
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.log("[endorsements] fetch error", { url: baseUrl, error });
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
      const name = acfString(e.acf?.endorser_name) || e.title.rendered;
      const org = acfString(e.acf?.endorser_org);
      const title = org || acfString(e.acf?.endorser_title);
      const category = sectionCategory(e.acf, e.title.rendered);

      const { mediaId, imageUrl } = extractHeadshot(e.acf?.headshot);

      // If ACF returns a direct URL, use it without an extra media fetch.
      if (imageUrl) {
        return {
          id: `wp-${e.id}`,
          name,
          title,
          imageUrl,
          imageAlt: name,
          category,
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
          category,
        };
      } catch {
        return null;
      }
    })
  );

  const wpPeopleEndorsementsClean = wpPeopleEndorsements.filter(
    (endorsement): endorsement is Endorsement => Boolean(endorsement),
  );

  let leaders = wpPeopleEndorsementsClean.filter((e) => e.category === "Leaders");
  let organizations = wpPeopleEndorsementsClean.filter((e) => e.category === "Organizations");
  let mainEndorsements = wpPeopleEndorsementsClean.filter(
    (e) => e.category !== "Leaders" && e.category !== "Organizations",
  );

  // Safety: if a specific person endorsement accidentally lands in the Organizations
  // bucket (due to inconsistent ACF shapes), move it back to the end of the
  // "people" area so it renders before the Organizations cards.
  const normalizeName = (s: string) => s.replace(/\s+/g, " ").trim().toLowerCase();
  const JEN_DEMEO = "jen demeo";

  const jenFromOrgs = organizations.find((e) => {
    const name = normalizeName(e.name);
    const title = normalizeName(e.title);
    return name.includes(JEN_DEMEO) || title.includes(JEN_DEMEO);
  });

  if (jenFromOrgs) {
    organizations = organizations.filter((e) => e.id !== jenFromOrgs.id);
    leaders = [...leaders, jenFromOrgs];
  }

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
              people={leaders}
              organizations={organizations}
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
          {leaders.length > 0 ? (
            <div className="mt-10 sm:mt-14 md:mt-16">
              <h2 className="text-center text-xl font-black uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
                Leaders
              </h2>
              <div className="mt-5 sm:mt-6 md:mt-8">
                <EndorsementsGrid endorsements={leaders} variant="people" />
              </div>
            </div>
          ) : null}

          {organizations.length > 0 ? (
            <div className="mt-10 sm:mt-14 md:mt-16">
              <h2 className="text-center text-xl font-black uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
                Organizations
              </h2>
              <div className="mt-5 sm:mt-6 md:mt-8">
                <EndorsementsGrid endorsements={organizations} variant="orgs" />
              </div>
            </div>
          ) : null}
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
