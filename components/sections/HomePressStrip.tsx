import Image from "next/image";
import Link from "next/link";

import { FEATURED_IN } from "@/src/content/featuredIn";

export function HomePressStrip() {
  const mobileMarqueeItems = [...FEATURED_IN, ...FEATURED_IN];

  return (
    <section id="featured" aria-label="In the news" className="relative bg-neutral-base py-10 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_240px_at_50%_-10%,rgba(59,130,246,.14),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/14 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <p className="text-xs font-black uppercase tracking-widest text-neutral-muted">Featured in</p>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0" />
        </div>

        <div className="relative mt-6">
          {/* Mobile: auto-rotating strip */}
          <div className="sm:hidden">
            <div className="overflow-hidden py-3">
              <div
                className={[
                  "flex w-max items-center gap-12",
                  "will-change-transform animate-[ffsvMarquee_26s_linear_infinite]",
                  "motion-reduce:animate-none motion-reduce:overflow-x-auto",
                  "motion-reduce:[scrollbar-width:none] motion-reduce:[-ms-overflow-style:none] motion-reduce:[&::-webkit-scrollbar]:hidden",
                ].join(" ")}
              >
                {mobileMarqueeItems.map((item, idx) => {
                  const isDupe = idx >= FEATURED_IN.length;
                  return (
                    <Link
                      key={`${item.slug}-${idx}`}
                      href={`/featured/${item.slug}`}
                      aria-label={`${item.name} coverage`}
                      aria-hidden={isDupe ? true : undefined}
                      tabIndex={isDupe ? -1 : undefined}
                      className="group inline-flex shrink-0 items-center justify-center py-2"
                    >
                      <Image
                        src={item.logoUrl}
                        alt={item.name}
                        width={520}
                        height={140}
                        className="h-10 w-auto opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tablet/Desktop: centered strip (SDUT in visual center) */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center py-3">
            {/* Left logo — pushed to the right edge of its column */}
            <div className="flex justify-end pr-8 lg:pr-12">
              <Link
                href={`/featured/${FEATURED_IN[0].slug}`}
                aria-label={`${FEATURED_IN[0].name} coverage`}
                className="group inline-flex shrink-0 items-center justify-center py-2"
              >
                <Image
                  src={FEATURED_IN[0].logoUrl}
                  alt={FEATURED_IN[0].name}
                  width={520}
                  height={140}
                  className="h-10 lg:h-12 w-auto opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                />
              </Link>
            </div>

            {/* Center logo — truly centered */}
            <Link
              href={`/featured/${FEATURED_IN[1].slug}`}
              aria-label={`${FEATURED_IN[1].name} coverage`}
              className="group inline-flex shrink-0 items-center justify-center py-2"
            >
              <Image
                src={FEATURED_IN[1].logoUrl}
                alt={FEATURED_IN[1].name}
                width={520}
                height={140}
                className="h-14 lg:h-16 w-auto opacity-90 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>

            {/* Right logo — pushed to the left edge of its column */}
            <div className="flex justify-start pl-8 lg:pl-12">
              <Link
                href={`/featured/${FEATURED_IN[2].slug}`}
                aria-label={`${FEATURED_IN[2].name} coverage`}
                className="group inline-flex shrink-0 items-center justify-center py-2"
              >
                <Image
                  src={FEATURED_IN[2].logoUrl}
                  alt={FEATURED_IN[2].name}
                  width={520}
                  height={140}
                  className="h-10 lg:h-12 w-auto opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* Edge fades so the strip feels intentional (not “boxes”) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-neutral-base to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-neutral-base to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

