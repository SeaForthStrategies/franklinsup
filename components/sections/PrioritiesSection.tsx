import Image from "next/image";

interface PriorityCardBase {
  id: string;
  title: string;
}

interface PriorityCardText extends PriorityCardBase {
  type: "text";
  lead: string;
  bullets: string[];
  body: string[];
}

interface PriorityCardImage extends PriorityCardBase {
  type: "image";
  imageUrl: string;
  imageAlt: string;
}

type PriorityCard = PriorityCardText | PriorityCardImage;

interface PrioritiesSectionProps {
  title?: string;
  subtitle?: string;
  cards: PriorityCard[];
  borderless?: boolean;
}

export function PrioritiesSection({
  title = "Solutions That Put Families First",
  subtitle = "Clear commitments on affordability, homelessness, public safety, fire prevention, and fixing our roads.",
  cards,
  borderless = false,
}: PrioritiesSectionProps) {
  return (
    <section aria-labelledby="priorities-title" className="relative overflow-hidden py-16 sm:py-20">
      {/* Soft gradient background blending from news section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-indigo-50/40 to-slate-50/80" />
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[720px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[-15%] h-[420px] w-[720px] rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/80">
            <span className="h-3 w-3 rounded bg-gradient-to-br from-accent-400 to-secondary-500 shadow-sm" aria-hidden="true" />
            Priorities
          </div>

          <h2 id="priorities-title" className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl gradient-primary">
            {title}
          </h2>

          <p className="mt-4 text-base text-neutral-muted sm:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              aria-labelledby={`priority-${card.id}-title`}
              className={[
                "relative isolate flex h-full flex-col gap-3 overflow-hidden rounded-2xl bg-neutral-base/90 p-6 shadow-card sm:p-7",
                borderless ? "" : "border border-neutral-border",
              ].join(" ")}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-accent-400 to-secondary-500 opacity-95"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(680px_220px_at_10%_10%,rgba(25,183,255,.10),transparent_60%)]"
              />

              <h3
                id={`priority-${card.id}-title`}
                className="relative z-10 mt-2 font-heading text-xl font-black uppercase tracking-tight text-primary-800 sm:text-2xl"
              >
                {card.title}
              </h3>

              {card.type === "image" ? (
                <div
                  className={[
                    "relative z-10 overflow-hidden rounded-xl bg-neutral-base",
                    borderless ? "" : "border border-neutral-border",
                  ].join(" ")}
                >
                  <Image
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    width={1200}
                    height={750}
                    className="h-auto w-full"
                  />
                </div>
              ) : (
                <>
                  <p className="relative z-10 text-base text-neutral-muted">
                    {card.lead}
                  </p>

                  <ul role="list" className="relative z-10 grid gap-2">
                    {card.bullets.map((b) => (
                      <li key={b} className="grid grid-cols-[16px_1fr] items-start gap-3 text-sm font-black leading-relaxed text-neutral-ink sm:text-[15px]">
                        <span
                          aria-hidden="true"
                          className="mt-1 h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-accent-400 to-secondary-500 shadow-sm"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {card.body.map((p, idx) => (
                    <p key={idx} className="relative z-10 text-sm leading-relaxed text-neutral-muted sm:text-base">
                      {p}
                    </p>
                  ))}
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

