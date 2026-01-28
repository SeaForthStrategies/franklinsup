import Image from "next/image";

interface EndorsementQuoteProps {
  quote: string;
  author: string;
  authorTitle?: string;
  imageUrl: string;
  imageAlt?: string;
}

export function EndorsementQuote({ quote, author, authorTitle, imageUrl, imageAlt }: EndorsementQuoteProps) {
  return (
    <section className="bg-neutral-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-neutral-ink sm:text-4xl">
            Here&apos;s why:
          </h2>

          <div className="grid gap-8 rounded-3xl border border-neutral-border bg-neutral-base p-6 shadow-card sm:grid-cols-[200px_1fr] sm:gap-10 sm:p-8 lg:grid-cols-[240px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl bg-neutral-surface sm:mx-0 sm:max-w-none">
              <Image
                src={imageUrl}
                alt={imageAlt || author}
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 200px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
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
