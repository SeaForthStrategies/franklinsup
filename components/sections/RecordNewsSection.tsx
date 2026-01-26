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
}

export function RecordNewsSection({ donateUrl, lead, rail }: RecordNewsSectionProps) {
  return (
    <section aria-labelledby="recordnews-title" className="relative overflow-hidden py-16 sm:py-20">
      {/* Soft gradient background blending with adjacent sections */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-blue-50/60" />
        <div className="absolute -top-24 left-[-10%] h-[360px] w-[850px] -skew-y-6 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -top-24 right-[-10%] h-[360px] w-[780px] -skew-y-6 rounded-full bg-cyan-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/80">
            <span className="h-3 w-3 rounded bg-gradient-to-br from-accent-400 to-secondary-500 shadow-sm" aria-hidden="true" />
            John on the Record
          </div>

          <h2 id="recordnews-title" className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl gradient-primary">
            In the News &amp; Commentary
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-neutral-muted">
            Op-eds and commentary where John lays out the case for common-sense policy — directly, clearly, and on the record.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta site-cta--primary text-base sm:text-sm sm:py-3"
            >
              Donate
            </a>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.65fr_1fr] lg:items-stretch">
          {/* Lead */}
          <article className="relative h-full overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-accent-400 to-secondary-500 opacity-95" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
              <a
                href={lead.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={lead.ariaLabel ?? `Read: ${lead.title}`}
                className="relative block"
              >
                <div className="relative aspect-video lg:aspect-auto lg:h-full bg-[#0b1733]">
                  <Image
                    src={lead.imageUrl}
                    alt={lead.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/35"
                  />
                </div>
              </a>

              <div className="flex h-full flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-primary/70">
                  <span className="font-semibold">{lead.sourceName}</span>
                  <span aria-hidden="true" className="opacity-70">
                    •
                  </span>
                  <time dateTime={lead.dateTime}>{lead.dateLabel}</time>
                </div>

                <h2 className="font-heading text-2xl font-black leading-tight tracking-tight text-neutral-ink md:text-3xl">
                  {lead.title}
                </h2>

                {lead.excerpt ? (
                  <p className="text-base text-neutral-muted">{lead.excerpt}</p>
                ) : null}

                <a
                  href={lead.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-max items-center justify-between gap-3 rounded-xl border border-neutral-border bg-neutral-surface px-4 py-3 font-black tracking-wide text-primary-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="inline-flex items-center gap-2">
                    {/* Use <img> for SVG icons to avoid next/image SVG restrictions */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lead.sourceIconUrl}
                      alt=""
                      aria-hidden="true"
                      width={34}
                      height={34}
                      className="h-[34px] w-[34px] rounded-md border border-neutral-border bg-neutral-base p-1"
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
          <aside className="h-full overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card" aria-label="More on the record">
            <div className="border-b border-neutral-border bg-neutral-surface px-5 py-4">
              <div className="text-xs font-black uppercase tracking-widest text-primary/80">
                More on the Record
              </div>
              <div className="mt-1 text-sm text-neutral-muted">Recent coverage &amp; commentary</div>
            </div>

            <div className="flex flex-col gap-0 p-3">
              {rail.map((item, idx) => (
                <article
                  key={item.url}
                  className={[
                    "grid grid-cols-[96px_1fr] gap-3 rounded-xl p-3 transition-all hover:-translate-y-0.5 hover:bg-sky-50/60",
                    idx > 0 ? "border-t border-neutral-border rounded-t-none" : "",
                    "sm:grid-cols-[110px_1fr]",
                  ].join(" ")}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-[70px] w-[96px] overflow-hidden rounded-xl border border-neutral-border bg-[#0b1733] sm:h-[80px] sm:w-[110px]">
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fill
                        sizes="110px"
                        className="object-cover"
                      />
                    </div>
                  </a>

                  <div className="min-w-0">
                    <div className="text-xs text-primary/70">
                      <time dateTime={item.dateTime}>{item.dateLabel}</time>
                    </div>
                    <h3 className="mt-1 line-clamp-2 font-heading text-sm font-black leading-snug text-neutral-ink sm:text-base">
                      {item.title}
                    </h3>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-max items-center gap-2 border-b-2 border-primary/20 pb-0.5 text-sm font-black text-primary-800 transition-all hover:translate-x-0.5 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {/* Use <img> for SVG icons to avoid next/image SVG restrictions */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.sourceIconUrl}
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-md border border-neutral-border bg-neutral-base p-1"
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

