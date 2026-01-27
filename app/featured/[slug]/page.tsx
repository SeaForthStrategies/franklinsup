import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURED_IN, type VideoAppearance } from "@/src/content/featuredIn";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getItem(slug: string) {
  return FEATURED_IN.find((entry) => entry.slug === slug);
}

/** Type guard for items with extended video content */
function hasEnhancedContent(
  item: (typeof FEATURED_IN)[number]
): item is (typeof FEATURED_IN)[number] & {
  headline: string;
  subhead: string;
  description: string;
  keyPoints: string[];
  date?: string;
} {
  return (
    "headline" in item &&
    typeof (item as { headline?: unknown }).headline === "string" &&
    "subhead" in item &&
    typeof (item as { subhead?: unknown }).subhead === "string" &&
    "description" in item &&
    typeof (item as { description?: unknown }).description === "string" &&
    "keyPoints" in item &&
    Array.isArray((item as { keyPoints?: unknown }).keyPoints)
  );
}

function hasVideos(
  item: (typeof FEATURED_IN)[number]
): item is (typeof FEATURED_IN)[number] & {
  videos: VideoAppearance[];
} {
  return "videos" in item && Array.isArray((item as { videos?: unknown }).videos);
}

type ArticleItem = {
  title: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  sourceName: string;
  dateLabel: string;
  dateTime: string;
  excerpt?: string;
  ariaLabel?: string;
};

function hasArticles(
  item: (typeof FEATURED_IN)[number]
): item is (typeof FEATURED_IN)[number] & {
  articles: ArticleItem[];
} {
  return "articles" in item && Array.isArray((item as { articles?: unknown }).articles);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) return {};

  const title = hasEnhancedContent(item) ? `${item.headline} | ${item.name}` : `${item.name} | In the news`;
  const description = hasEnhancedContent(item) ? item.description : "Coverage featuring my campaign and priorities in District 5.";
  const url = `https://franklinforsupervisor.com/featured/${item.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Franklin for Supervisor",
      type: "website",
    },
  };
}

/** Outlet badge component */
function OutletBadge({ outlet }: { outlet: VideoAppearance["outlet"] }) {
  const colors = {
    KUSI: "bg-blue-100 text-blue-800 border-blue-200",
    "Fox 5": "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${colors[outlet]}`}
    >
      {outlet}
    </span>
  );
}

export default async function FeaturedItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) notFound();

  // Render enhanced layout for items with richer content (videos OR article)
  if (hasEnhancedContent(item)) {
    const videos = hasVideos(item) ? item.videos : [];
    const isVideoPage = videos.length > 0;
    const articles = hasArticles(item) ? item.articles : [];

    return (
      <>
        {/*
         * NOTE: We intentionally render ALL videos in the same card layout so every embed is the same size.
         * Mobile: 1-column. Tablet+: 2-column.
         */}
        {/* Hero section */}
        <section className="relative bg-neutral-base">
          {/* Subtle decorative gradients - hidden on mobile for performance */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
            <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20">
            {/* Back link - touch-friendly */}
            <Link
              href="/#featured"
              className="group mb-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-neutral-muted transition-colors hover:text-primary sm:mb-8"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to featured coverage
            </Link>

            {/* Header */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center justify-center rounded-lg border border-neutral-border bg-white/80 px-3 py-1.5 shadow-sm sm:rounded-xl sm:px-4 sm:py-2">
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    width={520}
                    height={140}
                    className="h-5 w-auto sm:h-6 md:h-8"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-muted sm:text-xs">
                  {videos.length ? `${videos.length} Videos` : "Featured"}
                </span>
                {item.date ? (
                  <>
                    <span className="text-neutral-border">·</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-muted sm:text-xs">
                      {item.date}
                    </span>
                  </>
                ) : null}
              </div>

              <h1 className="text-balance text-2xl font-black uppercase tracking-tight gradient-primary sm:text-3xl md:text-4xl lg:text-5xl">
                {item.headline}
              </h1>
              <p className="text-base text-neutral-muted sm:text-lg md:text-xl">{item.subhead}</p>
              <p className="max-w-2xl text-sm leading-relaxed text-neutral-slate sm:text-base">{item.description}</p>
            </div>

            {/* Videos (if present) */}
            {videos.length ? (
              <div className="mt-8 sm:mt-10 md:mt-12">
                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-ink sm:text-2xl">Videos</h2>
                <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2 lg:gap-8">
                  {videos.map((video) => (
                    <article
                      key={video.videoId}
                      className="overflow-hidden rounded-xl border border-neutral-border bg-neutral-base shadow-card sm:rounded-2xl"
                    >
                      <div className="relative aspect-video overflow-hidden bg-neutral-ink">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      </div>

                      <div className="p-4 sm:p-5">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <OutletBadge outlet={video.outlet} />
                          <span className="text-[10px] text-neutral-muted sm:text-xs">{video.duration}</span>
                          {video.host ? (
                            <>
                              <span className="text-neutral-border">·</span>
                              <span className="text-[10px] text-neutral-muted sm:text-xs">{video.host}</span>
                            </>
                          ) : null}
                        </div>

                        <h3 className="text-base font-black uppercase tracking-tight text-neutral-ink sm:text-lg">
                          {video.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-neutral-slate sm:mt-2 sm:text-sm">
                          {video.description}
                        </p>

                        <a
                          href={`https://www.youtube.com/watch?v=${video.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80 sm:mt-4"
                        >
                          Watch on YouTube
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Articles (if present) */}
            {articles.length ? (
              <div className="mt-8 sm:mt-10 md:mt-12">
                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-ink sm:text-2xl">Articles</h2>
                <p className="mt-1 text-sm text-neutral-muted sm:text-base">
                  Recent commentary and reporting featuring my work and priorities.
                </p>

                <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2 lg:gap-8">
                  {articles.map((a) => (
                    <article
                      key={a.url}
                      className="overflow-hidden rounded-xl border border-neutral-border bg-neutral-base shadow-card sm:rounded-2xl"
                    >
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={a.ariaLabel ?? `Read: ${a.title}`}
                        className="block"
                      >
                        <div className="relative aspect-video overflow-hidden bg-neutral-ink">
                          <Image
                            src={a.imageUrl}
                            alt={a.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/35" />
                        </div>
                      </a>

                      <div className="p-4 sm:p-5">
                        <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-neutral-muted sm:text-xs">
                          <span>{a.sourceName}</span>
                          <span className="text-neutral-border">·</span>
                          <time dateTime={a.dateTime}>{a.dateLabel}</time>
                        </div>

                        <h3 className="text-base font-black uppercase tracking-tight text-neutral-ink sm:text-lg">
                          {a.title}
                        </h3>
                        {a.excerpt ? (
                          <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-neutral-slate sm:mt-2 sm:text-sm">
                            {a.excerpt}
                          </p>
                        ) : null}

                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 sm:mt-4"
                        >
                          Read the article
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14v-6" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* Key priorities section */}
        <section className="border-t border-neutral-border/60 bg-neutral-base">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {/* Key points */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-black uppercase tracking-tight gradient-primary sm:text-2xl">
                  {isVideoPage ? "My Priorities" : "Key points"}
                </h2>
                <p className="mt-1 text-sm text-neutral-muted sm:mt-2 sm:text-base">
                  {isVideoPage ? "The issues I discuss in these interviews." : "Highlights from this op-ed."}
                </p>

                <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  {item.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary sm:h-7 sm:w-7 sm:text-sm">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-neutral-slate sm:text-base lg:text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar - full width on mobile, sticky on desktop */}
              <aside className="rounded-2xl border border-neutral-border bg-neutral-surface p-4 shadow-card sm:rounded-3xl sm:p-6 lg:sticky lg:top-28 lg:self-start">
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs">Quick Links</p>
                <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4">
                  <div className="flex items-center justify-center rounded-xl border border-neutral-border bg-white/70 p-3 sm:rounded-2xl sm:p-4">
                    <Image
                      src={item.logoUrl}
                      alt={item.name}
                      width={520}
                      height={140}
                      className="h-8 w-auto sm:h-10 md:h-12"
                    />
                  </div>
                  {isVideoPage ? (
                    <a
                      className="site-cta site-cta--primary"
                      href="https://www.youtube.com/@mayorjohnfranklin/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My YouTube Channel
                    </a>
                  ) : (
                    <a className="site-cta site-cta--primary" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Read the op-ed
                    </a>
                  )}
                  <Link className="site-cta site-cta--secondary" href="/issues">
                    See My Issues
                  </Link>
                  <Link className="site-cta site-cta--secondary" href="/">
                    Back to Home
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Fallback: simple layout for items without extended content
  return (
    <section className="bg-neutral-base">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
        <SectionHeader eyebrow="Featured" title="In the news" lead={`Coverage from ${item.name}.`} />

        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="prose prose-sm prose-neutral max-w-none sm:prose-base">
              <p>
                I&apos;m building these &quot;Featured&quot; pages now so each logo on the home page can link to a
                dedicated write-up.
              </p>
              <p>
                For now, you can read the original coverage here:{" "}
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {item.sourceUrl}
                </a>
                .
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-neutral-border bg-neutral-surface p-4 shadow-card sm:rounded-3xl sm:p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs">Source</p>
            <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4">
              <div className="flex items-center justify-center rounded-xl border border-neutral-border bg-white/70 p-3 sm:rounded-2xl sm:p-4">
                <Image
                  src={item.logoUrl}
                  alt={item.name}
                  width={520}
                  height={140}
                  className="h-8 w-auto sm:h-10 md:h-12"
                />
              </div>
              <a
                className="site-cta site-cta--primary"
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the original coverage
              </a>
              <Link className="site-cta site-cta--secondary" href="/">
                Back to home
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
