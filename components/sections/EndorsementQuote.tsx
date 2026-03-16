import Image from "next/image";

interface EndorsementQuoteProps {
  quote: string;
  author: string;
  authorTitle?: string;
  imageUrl: string;
  imageAlt?: string;
  tone?: "light" | "dark";
}

const INLINE_TITLES = [
  "Vice President",
  "Congressman",
  "Congresswoman",
  "Supervisor",
  "Mayor",
  "Councilmember",
  "President",
  "Assemblymember",
  "Senator",
  "Sheriff",
  "Chief",
  "Director",
  "Chair",
  "Commissioner",
  "Judge",
  "CEO",
  "Founder",
] as const;

function splitAuthorName(fullName: string): { primaryName: string; inlineTitle?: string } {
  for (const title of INLINE_TITLES) {
    const index = fullName.indexOf(title);

    if (index === -1) continue;

    if (index === 0) {
      const primaryName = fullName.slice(title.length).trim();
      return {
        primaryName: primaryName || fullName,
        inlineTitle: title,
      };
    }

    const primaryName = fullName.slice(0, index).trim();
    const inlineTitle = fullName.slice(index).trim();

    if (!primaryName || !inlineTitle) {
      continue;
    }

    return { primaryName, inlineTitle };
  }

  return { primaryName: fullName };
}

export function EndorsementQuote({ quote, author, authorTitle, imageUrl, imageAlt, tone = "light" }: EndorsementQuoteProps) {
  const isDark = tone === "dark";
  const { primaryName, inlineTitle } = splitAuthorName(author);

  return (
    <section className={isDark ? "relative overflow-hidden bg-primary-900 text-white" : "bg-neutral-surface"}>
      {isDark ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
        </div>
      ) : null}

      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-14 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className={isDark ? "mb-6 text-2xl font-black uppercase tracking-tight text-white sm:mb-8 sm:text-3xl md:text-4xl" : "mb-6 text-2xl font-black uppercase tracking-tight text-neutral-ink sm:mb-8 sm:text-3xl md:text-4xl"}>
            Here&apos;s why:
          </h2>

          <div className="grid gap-5 rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:grid-cols-[180px_1fr] sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-[220px_1fr] md:gap-8 md:p-8 lg:grid-cols-[260px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-xl bg-neutral-surface sm:mx-0 sm:max-w-none sm:rounded-2xl animate-[fadeInScale_0.5s_ease-out_backwards] will-change-transform transform-gpu">
              {/* Backdrop (keeps the frame looking intentional) */}
              <Image
                src={imageUrl}
                alt=""
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 220px"
                className="object-cover scale-110 blur-2xl opacity-30 will-change-transform transform-gpu"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />

              {/* Foreground (fills the frame cleanly) */}
              <Image
                src={imageUrl}
                alt={imageAlt || author}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 220px"
                className="object-cover object-[50%_22%] drop-shadow-[0_18px_30px_rgba(2,6,23,0.45)] will-change-transform transform-gpu"
                priority
              />
            </div>

            <div className="flex flex-col justify-center animate-[fadeInUp_0.55s_ease-out_backwards] [animation-delay:120ms]">
              <blockquote className="text-sm leading-relaxed text-neutral-ink sm:text-base md:text-lg">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <cite className="mt-3 not-italic sm:mt-4">
                <div className="font-heading text-xs font-black uppercase tracking-tight text-neutral-ink sm:text-sm md:text-base">
                  <span>{primaryName}</span>
                  {inlineTitle && <span className="block">{inlineTitle}</span>}
                </div>
                {authorTitle && (
                  <div className="mt-0.5 text-[10px] text-neutral-muted sm:mt-1 sm:text-xs md:text-sm">
                    {authorTitle}
                  </div>
                )}
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
