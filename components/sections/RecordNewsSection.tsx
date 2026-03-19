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
  const items = [lead, ...rail];

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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.url}
              className={[
                "relative flex h-full flex-col overflow-hidden rounded-xl bg-neutral-base shadow-card sm:rounded-2xl",
                borderless ? "" : "border border-neutral-border",
              ].join(" ")}
            >
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-secondary opacity-95 sm:h-2" />

              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block" aria-label={item.ariaLabel ?? `Read: ${item.title}`}>
                <div className="relative h-48 overflow-hidden bg-[#0b1733] sm:h-52 lg:h-56">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-full w-full object-cover object-center"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                </div>
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] tracking-wide text-neutral-slate/70 sm:gap-2 sm:text-xs">
                  <span className="font-semibold">{item.sourceName}</span>
                  <span aria-hidden="true" className="opacity-70">—</span>
                  <time dateTime={item.dateTime}>{item.dateLabel}</time>
                </div>

                <h3 className="mt-1.5 line-clamp-3 font-heading text-base font-black leading-tight tracking-tight text-neutral-ink sm:text-lg md:text-xl">
                  {item.title}
                </h3>

                {item.excerpt ? <p className="mt-2 line-clamp-3 text-sm text-neutral-muted">{item.excerpt}</p> : null}

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ffsv-tap-link mt-auto inline-flex w-max items-center gap-2 border-b-2 border-primary/20 pb-0.5 pt-4 text-sm font-black text-neutral-ink transition-all hover:translate-x-0.5 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Image
                    src={item.sourceIconUrl}
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-md border border-neutral-border bg-neutral-surface p-1"
                  />
                  Read <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

