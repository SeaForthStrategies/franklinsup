import Image from "next/image";

interface NewsItem {
  title: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  sourceIconUrl: string;
  sourceName: string;
  dateLabel: string;
  dateTime: string; // YYYY-MM-DD
  excerpt?: string;
  ariaLabel?: string;
}

interface RecordNewsSectionProps {
  donateUrl: string;
  lead: NewsItem;
  rail: NewsItem[];
  borderless?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  hideCta?: boolean;
  tone?: "light" | "dark";
  showBackground?: boolean;
}

export function RecordNewsSection({
  donateUrl,
  lead,
  rail,
  borderless = false,
  eyebrow = "My record",
  title = "In the News & Commentary",
  description = "Op-eds and commentary where I lay out the case for common-sense policy — directly, clearly, and on the record.",
  ctaLabel = "Donate",
  hideCta = false,
  tone = "light",
  showBackground = true,
}: RecordNewsSectionProps) {
  const isDark = tone === "dark";
  const showEyebrow = (eyebrow ?? "").trim().length > 0;

  return (
    <section aria-labelledby="recordnews-title" className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Soft gradient background blending with adjacent sections */}
      {showBackground ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {isDark ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary" />
              <div className="absolute -top-24 left-[-10%] h-[240px] w-[500px] -skew-y-6 rounded-full bg-secondary/20 blur-3xl sm:h-[300px] sm:w-[680px] md:h-[360px] md:w-[850px]" />
              <div className="absolute -top-24 right-[-10%] h-[220px] w-[450px] -skew-y-6 rounded-full bg-secondary/10 blur-3xl sm:h-[280px] sm:w-[620px] md:h-[360px] md:w-[780px]" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
              <div className="absolute -top-24 left-[-10%] h-[240px] w-[500px] -skew-y-6 rounded-full bg-blue-200/25 blur-3xl sm:h-[300px] sm:w-[680px] md:h-[360px] md:w-[850px]" />
              <div className="absolute -top-24 right-[-10%] h-[220px] w-[450px] -skew-y-6 rounded-full bg-blue-300/15 blur-3xl sm:h-[280px] sm:w-[620px] md:h-[360px] md:w-[780px]" />
            </>
          )}
        </div>
      ) : null}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          {showEyebrow ? (
            <div
              className={[
                "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest sm:gap-3 sm:text-xs",
                isDark ? "text-neutral-base/80" : "text-neutral-slate/80",
              ].join(" ")}
            >
              {eyebrow}
            </div>
          ) : null}

          <h2
            id="recordnews-title"
            className={[
              "mt-2 text-2xl font-black uppercase tracking-tight sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl",
              isDark ? "text-neutral-base" : "text-primary",
            ].join(" ")}
          >
            {title}
          </h2>

          <p className={["mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg", isDark ? "text-neutral-base/80" : "text-neutral-muted"].join(" ")}>
            {description}
          </p>

          {!hideCta ? (
            <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-cta site-cta--primary text-sm py-3 px-6 sm:text-base sm:py-3.5 sm:px-8"
              >
                {ctaLabel}
              </a>
            </div>
          ) : null}
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:gap-6 lg:grid-cols-[1.65fr_1fr] lg:items-stretch">
          {/* Lead */}
          <article
            className={[
              "relative h-full overflow-hidden rounded-xl bg-neutral-base shadow-card sm:rounded-2xl",
              borderless ? "" : "border border-neutral-border",
            ].join(" ")}
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-secondary opacity-95 sm:h-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
              <a
                href={lead.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={lead.ariaLabel ?? `Read: ${lead.title}`}
                className="relative block"
              >
                <div className="relative aspect-video bg-[#0b1733] lg:aspect-auto lg:h-full">
                  <Image
                    src={lead.imageUrl}
                    alt={lead.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/35" />
                </div>
              </a>

              <div className="flex h-full flex-col gap-2 p-4 sm:gap-3 sm:p-6">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] tracking-wide text-neutral-slate/70 sm:gap-2 sm:text-xs">
                  <span className="font-semibold">{lead.sourceName}</span>
                  <span aria-hidden="true" className="opacity-70">—</span>
                  <time dateTime={lead.dateTime}>{lead.dateLabel}</time>
                </div>

                <h2 className="font-heading text-lg font-black leading-tight tracking-tight text-neutral-ink sm:text-xl md:text-2xl lg:text-3xl">
                  {lead.title}
                </h2>

                {lead.excerpt ? <p className="text-sm text-neutral-muted sm:text-base">{lead.excerpt}</p> : null}

                <a
                  href={lead.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "mt-auto inline-flex w-max items-center justify-between gap-2 rounded-lg bg-neutral-surface px-3 py-2.5 text-sm font-black tracking-wide text-neutral-ink shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:gap-3 sm:rounded-xl sm:px-4 sm:py-3",
                    borderless ? "" : "border border-neutral-border hover:border-primary/30",
                  ].join(" ")}
                >
                  <span className="inline-flex items-center gap-1.5 sm:gap-2">
                    {/* Use <img> for SVG icons to avoid next/image SVG restrictions */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lead.sourceIconUrl}
                      alt=""
                      aria-hidden="true"
                      width={34}
                      height={34}
                      className="h-7 w-7 rounded-md border border-neutral-border bg-neutral-surface p-1 sm:h-[34px] sm:w-[34px]"
                      loading="lazy"
                      decoding="async"
                    />
                    Read full story
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>

          {/* Rail */}
          <aside
            className={[
              "h-full overflow-hidden rounded-xl bg-neutral-base shadow-card sm:rounded-2xl",
              borderless ? "" : "border border-neutral-border",
            ].join(" ")}
            aria-label="More on the record"
          >
            <div className={["bg-neutral-surface px-4 py-3 sm:px-5 sm:py-4", borderless ? "" : "border-b border-neutral-border"].join(" ")}>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary/80 sm:text-xs">More on the Record</div>
              <div className="mt-0.5 text-xs text-neutral-muted sm:mt-1 sm:text-sm">Recent coverage &amp; commentary</div>
            </div>

            <div className="flex flex-col gap-0 p-2 sm:p-3">
              {rail.map((item, idx) => (
                <article
                  key={item.url}
                  className={[
                    "grid grid-cols-[80px_1fr] gap-2 rounded-lg p-2 transition-all hover:-translate-y-0.5 hover:bg-primary/5 sm:grid-cols-[96px_1fr] sm:gap-3 sm:rounded-xl sm:p-3 md:grid-cols-[110px_1fr]",
                    idx > 0 && !borderless ? "border-t border-neutral-border rounded-t-none" : "",
                  ].join(" ")}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div
                      className={[
                        "relative h-[56px] w-[80px] overflow-hidden rounded-lg bg-[#0b1733] sm:h-[70px] sm:w-[96px] sm:rounded-xl md:h-[80px] md:w-[110px]",
                        borderless ? "" : "border border-neutral-border",
                      ].join(" ")}
                    >
                      <Image src={item.imageUrl} alt={item.imageAlt} fill sizes="110px" className="object-cover" />
                    </div>
                  </a>

                  <div className="min-w-0">
                    <div className="text-[10px] text-neutral-slate/70 sm:text-xs">
                      <time dateTime={item.dateTime}>{item.dateLabel}</time>
                    </div>
                    <h3 className="mt-0.5 line-clamp-2 font-heading text-xs font-black leading-snug text-neutral-ink sm:mt-1 sm:text-sm md:text-base">
                      {item.title}
                    </h3>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ffsv-tap-link mt-1.5 inline-flex w-max items-center gap-1.5 border-b-2 border-primary/20 pb-0.5 text-xs font-black text-neutral-ink transition-all hover:translate-x-0.5 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-2 sm:gap-2 sm:text-sm"
                    >
                      {/* Use <img> for SVG icons to avoid next/image SVG restrictions */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.sourceIconUrl}
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                        className="h-5 w-5 rounded-md border border-neutral-border bg-neutral-surface p-0.5 sm:h-6 sm:w-6 sm:p-1"
                        loading="lazy"
                        decoding="async"
                      />
                      Read <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

