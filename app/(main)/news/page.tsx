import type { Metadata } from "next";
import { RecordNewsSection } from "@/components/sections/RecordNewsSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { YoutubeThumbFill } from "@/components/ui/YoutubeThumbFill.client";
import { RECORD_NEWS_LEAD, RECORD_NEWS_RAIL } from "@/src/content/recordNews";
import { FEATURED_IN } from "@/src/content/featuredIn";

export const metadata: Metadata = {
  title: "News & Commentary | Franklin for Supervisor 2026",
  description:
    "A curated hub of news coverage and on-the-record commentary — organized in one place.",
  openGraph: {
    title: "News & Commentary | Franklin for Supervisor 2026",
    description:
      "A curated hub of news coverage and on-the-record commentary — organized in one place.",
    url: "https://franklinforsupervisor.com/news",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

function getYouTubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.replace("/", "");
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    return null;
  } catch {
    return null;
  }
}

export default function NewsPage() {
  const stateOfCityVideos = [
    {
      title: "State of the City 2025",
      url: "https://www.youtube.com/watch?v=eB5-guajRV8",
      label: "Watch 2025",
    },
    {
      title: "State of the City 2024",
      url: "https://youtu.be/z41coPSMIOs",
      label: "Watch 2024",
    },
    {
      title: "State of the City 2023",
      url: "https://youtu.be/Y4JUA8zMPqs",
      label: "Watch 2023",
    },
    {
      title: "State of the City 2022",
      url: "https://www.youtube.com/watch?v=2cnkpTh2fkg",
      label: "Watch 2022",
    },
  ] as const;

  const coverage = [
    {
      title: "San Diego Union-Tribune: North County’s first shelter for homeless young adults opens in Vista",
      url: "https://www.sandiegouniontribune.com/2025/08/20/north-countys-first-shelter-for-homeless-young-adults-opens-in-vista/",
      sourceName: "San Diego Union-Tribune",
      dateLabel: "Aug 20, 2025",
      dateTime: "2025-08-20",
      summary: "North County’s first shelter for homeless young adults opens in Vista",
    },
    {
      title: "KPBS: North County’s first transitional housing for foster youth opens in Vista",
      url: "https://www.kpbs.org/news/quality-of-life/2025/08/19/north-countys-first-transitional-housing-for-foster-youth-opens-in-vista",
      sourceName: "KPBS",
      dateLabel: "Aug 19, 2025",
      dateTime: "2025-08-19",
      summary:
        "A look inside VisTAY House and the practical, compassion-first steps to help foster youth avoid homelessness.",
    },
    {
      title: "KUSI News: Vista considers tiny home options",
      url: "https://fox5sandiego.com/news/local-news/north-county/vista-considering-tiny-home-options/",
      sourceName: "KUSI News",
      dateLabel: "KUSI / FOX 5",
      dateTime: "2024-01-01",
      summary: "Coverage of practical housing options and getting the details right for neighborhoods and homeowners.",
    },
    {
      title: "San Diego Union-Tribune: dozens of new shelter beds open in North County",
      url: "https://www.sandiegouniontribune.com/2024/03/06/dozens-of-new-shelter-beds-open-in-north-county-as-leaders-look-to-clear-sidewalks-2/",
      sourceName: "San Diego Union-Tribune",
      dateLabel: "Mar 6, 2024",
      dateTime: "2024-03-06",
      summary: "Coverage on expanded shelter capacity and concrete steps to help people move off the streets.",
    },
  ] as const;

  const coverageSorted = [...coverage].sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  return (
    <div className="min-h-screen bg-primary">
      <section aria-labelledby="news-hub-title" className="relative overflow-hidden py-14 sm:py-16 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary" />
          <div className="absolute -top-24 left-[-12%] h-[240px] w-[500px] -skew-y-6 sm:h-[300px] sm:w-[720px] md:h-[360px] md:w-[920px]">
            <div
              className="absolute inset-0 rounded-full bg-secondary/20 motion-safe:animate-[ffsvHeroFloat_16s_ease-in-out_infinite]"
              style={{ filter: "blur(56px)" }}
            />
          </div>
          <div className="absolute -top-24 right-[-12%] h-[220px] w-[450px] -skew-y-6 sm:h-[280px] sm:w-[640px] md:h-[360px] md:w-[820px]">
            <div
              className="absolute inset-0 rounded-full bg-secondary/10 motion-safe:animate-[ffsvHeroFloat2_20s_ease-in-out_infinite]"
              style={{ filter: "blur(60px)" }}
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center motion-safe:animate-[fadeInUp_650ms_ease-out_1] motion-safe:[animation-fill-mode:both]">
            <h1
              id="news-hub-title"
              className="mt-3 text-balance text-2xl font-black uppercase tracking-tight text-neutral-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              News &amp; <span className="text-neutral-base">commentary</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-neutral-base/80 sm:mt-4 sm:text-base md:text-lg">
              Coverage, commentary, and video updates — organized in one place.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-7 sm:gap-x-7 sm:gap-y-4">
              {FEATURED_IN.map((item) => (
                <Link
                  key={item.slug}
                  href={`/featured/${item.slug}`}
                  aria-label={`${item.name} coverage`}
                  className="group relative inline-flex h-10 w-[140px] items-center justify-center overflow-hidden rounded-xl px-2 sm:h-12 sm:w-[170px] sm:px-2.5 md:h-14 md:w-[190px] md:px-3"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-white/75 blur-2xl transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    width={520}
                    height={140}
                    className="relative z-10 h-full w-full object-contain object-center opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {[
              {
                title: "Op-eds & commentary",
                body: "Published commentary on policy, accountability, and results.",
                href: "#recordnews-title",
                cta: "Read commentary",
                delay: "motion-safe:[animation-delay:120ms]",
              },
              {
                title: "Coverage",
                body: "Reputable reporting across housing, public safety, and community priorities.",
                href: "#coverage-title",
                cta: "Read coverage",
                delay: "motion-safe:[animation-delay:200ms]",
              },
              {
                title: "State of the City",
                body: "Annual updates and recap videos in one place.",
                href: "#state-of-city-title",
                cta: "Watch videos",
                delay: "motion-safe:[animation-delay:280ms]",
              },
            ].map((card) => (
              <section
                key={card.title}
                className={[
                  "rounded-xl border border-neutral-base/15 bg-neutral-base/10 p-5 shadow-card backdrop-blur sm:rounded-2xl sm:p-6",
                  "min-h-[190px] sm:min-h-[220px]",
                  "flex flex-col justify-between text-center",
                  "motion-safe:animate-[fadeInUp_650ms_ease-out_1] motion-safe:[animation-fill-mode:both]",
                  card.delay,
                ].join(" ")}
              >
                <div>
                  <h2 className="mt-2 text-balance text-lg font-black uppercase tracking-tight text-neutral-base sm:mt-3 sm:text-xl md:text-2xl">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-base/80 sm:mt-4 sm:text-base">{card.body}</p>
                </div>

                <a
                  href={card.href}
                  className="mx-auto mt-5 inline-flex w-max items-center justify-center rounded-full border border-neutral-base/25 bg-neutral-base/10 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-neutral-base shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-neutral-base/15 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary sm:mt-6 sm:px-5 sm:py-3 sm:text-sm"
                >
                  {card.cta}
                </a>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave1" />

      <RecordNewsSection
        donateUrl="https://secure.franklinforsupervisor.com/15?_gl=1*1jmx4dj*_gcl_au*NDI0MzU5NjY1LjE3NjQ2OTQ1NTM."
        lead={RECORD_NEWS_LEAD}
        rail={RECORD_NEWS_RAIL}
        eyebrow=""
        title="Op-eds & commentary"
        description="Published commentary on the issues — direct, clear, and on the record."
        tone="dark"
        showBackground={false}
      />

      <SectionDivider variant="wave2" />

      <section aria-labelledby="coverage-title" className="py-14 sm:py-16 md:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Match the visual language of the op-eds block below */}
          <header className="max-w-3xl">
            <h2 id="coverage-title" className="mt-3 text-2xl font-black uppercase tracking-tight text-neutral-base sm:text-3xl md:text-4xl lg:text-5xl">
              News coverage featuring me
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-neutral-base/80 sm:mt-4 sm:text-base md:text-lg">
              A few reputable stories about local work and practical solutions.
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {coverageSorted.map((item) => (
              <article
                key={item.url}
                className="relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-xl border border-neutral-border bg-neutral-surface shadow-card transition-all hover:-translate-y-0.5 hover:shadow-md sm:min-h-[270px] sm:rounded-2xl"
              >
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-95 sm:h-1.5" />

                <div className="flex flex-1 flex-col gap-2 p-4 sm:gap-3 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] tracking-wide text-neutral-slate/70 sm:gap-2 sm:text-xs">
                    <span className="font-semibold">{item.sourceName}</span>
                    <span aria-hidden="true" className="opacity-70">—</span>
                    <time dateTime={item.dateTime}>{item.dateLabel}</time>
                  </div>

                  <h3 className="line-clamp-3 font-heading text-base font-black leading-snug text-neutral-ink sm:text-lg md:text-xl">
                    {item.title}
                  </h3>

                  {item.summary ? <p className="line-clamp-3 text-xs leading-relaxed text-neutral-muted sm:text-sm md:text-base">{item.summary}</p> : null}

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ffsv-tap-link mt-auto inline-flex w-max items-center gap-1.5 border-b-2 border-primary/20 pb-0.5 text-xs font-black text-neutral-ink transition-all hover:translate-x-0.5 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:gap-2 sm:text-sm"
                  >
                    Read <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave1" />

      <section aria-labelledby="state-of-city-title" className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <h2 id="state-of-city-title" className="mt-3 text-2xl font-black uppercase tracking-tight text-neutral-base sm:text-3xl md:text-4xl lg:text-5xl">
              State of the City
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-neutral-base/80 sm:mt-4 sm:text-base md:text-lg">Annual updates and recap videos.</p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
            {stateOfCityVideos.map((v) => {
              const id = getYouTubeId(v.url);

              return (
                <a
                  key={v.url}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-border bg-neutral-surface shadow-card transition-all hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl"
                >
                  <div className="relative h-48 overflow-hidden bg-neutral-surface sm:h-52 lg:h-56">
                    {id ? (
                      <YoutubeThumbFill
                        videoId={id}
                        alt={v.title}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="h-full w-full object-cover object-center sm:scale-[1.02]"
                      />
                    ) : null}
                    <div className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-neutral-surface/90 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-neutral-ink backdrop-blur sm:bottom-3 sm:left-3 sm:gap-2 sm:px-3 sm:py-1 sm:text-xs">
                      Watch <span aria-hidden="true">→</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/80 sm:text-xs">Video</div>
                    <div className="mt-1.5 text-sm font-black text-neutral-ink sm:mt-2 sm:text-base">{v.title}</div>
                    <div className="mt-auto pt-2 text-xs text-neutral-muted sm:pt-3 sm:text-sm">{v.label}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

