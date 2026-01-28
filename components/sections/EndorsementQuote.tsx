import Image from "next/image";

interface EndorsementQuoteProps {
  quote: string;
  author: string;
  authorTitle?: string;
  imageUrl: string;
  imageAlt?: string;
  tone?: "light" | "dark";
}

export function EndorsementQuote({ quote, author, authorTitle, imageUrl, imageAlt, tone = "light" }: EndorsementQuoteProps) {
  const isDark = tone === "dark";

  return (
    <section className={isDark ? "relative overflow-hidden bg-primary-900 text-white" : "bg-neutral-surface"}>
      {isDark ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
        </div>
      ) : null}

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className={isDark ? "mb-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl" : "mb-8 text-3xl font-black uppercase tracking-tight text-neutral-ink sm:text-4xl"}>
            Here&apos;s why:
          </h2>

          <div className="grid gap-8 rounded-3xl border border-neutral-border bg-neutral-base p-6 shadow-card sm:grid-cols-[220px_1fr] sm:gap-10 sm:p-8 lg:grid-cols-[260px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl bg-neutral-surface sm:mx-0 sm:max-w-none animate-[fadeInScale_0.5s_ease-out_backwards]">
              {/* Backdrop (keeps the frame looking intentional) */}
              <Image
                src={imageUrl}
                alt=""
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 220px"
                className="object-cover scale-110 blur-2xl opacity-30"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />

              {/* Foreground (fills the frame cleanly) */}
              <Image
                src={imageUrl}
                alt={imageAlt || author}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 220px"
                className="object-cover object-[50%_22%] drop-shadow-[0_18px_30px_rgba(2,6,23,0.45)]"
              />
            </div>

            <div className="flex flex-col justify-center animate-[fadeInUp_0.55s_ease-out_backwards] [animation-delay:120ms]">
              <blockquote className="text-base leading-relaxed text-neutral-ink sm:text-lg">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <cite className="mt-4 not-italic">
                <div className="font-heading text-sm font-black uppercase tracking-tight text-neutral-ink sm:text-base">
                  {author}
                </div>
                {authorTitle && (
                  <div className="mt-1 text-xs text-neutral-muted sm:text-sm">{authorTitle}</div>
                )}
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
