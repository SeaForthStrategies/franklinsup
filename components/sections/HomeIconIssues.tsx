import Image from "next/image";
import Link from "next/link";

interface HomeIconIssuesProps {
  learnMoreHref?: string;
}

const CARDS = [
  {
    id: "fire",
    title: "Fire Prevention",
    body:
      "Proper planning could have prevented the LA wildfires. San Diego County needs to ensure that does not happen here.",
    icon: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/Fire.png",
    bgFocusClass: "object-[50%_22%]",
    bgScaleClass: "",
    bgHoverScaleClass: "group-hover:scale-[1.06]",
  },
  {
    id: "roads",
    title: "Fix Our Roads",
    body:
      "I will finally fix the 78 corridor. SANDAG has failed to fix the SR-78/I-5 interchange and the SR-78/I-15 interchange they’ve promised for decades.",
    icon: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/traffic.png",
    bgFocusClass: "object-[50%_22%]",
    bgScaleClass: "",
    bgHoverScaleClass: "group-hover:scale-[1.06]",
  },
  {
    id: "safety",
    title: "Public Safety",
    body:
      "Accountable action that keeps neighborhoods safe, supports law enforcement, and puts victims and families first.",
    icon: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/Safety.png",
    bgFocusClass: "object-[50%_22%]",
    bgScaleClass: "",
    bgHoverScaleClass: "group-hover:scale-[1.06]",
  },
] as const;

export function HomeIconIssues({ learnMoreHref = "/issues" }: HomeIconIssuesProps) {
  const issuesBaseHref = learnMoreHref.split("#")[0] || "/issues";

  return (
    <section
      id="priorities"
      aria-labelledby="home-issues-title"
      className="relative overflow-hidden bg-primary-900 py-10 text-white sm:py-14 md:py-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="home-issues-title" className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Real problems. Real solutions.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-4 sm:text-lg md:text-xl">
            Practical, results-focused leadership on the issues that affect families across North County every day.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {CARDS.map((c, idx) => {
            const topicHref = `${issuesBaseHref}#${c.id}`;

            return (
              <Link
                key={c.id}
                href={topicHref}
                className={[
                  "group relative block h-full min-h-[240px] overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card sm:min-h-[300px] sm:rounded-3xl",
                  idx === CARDS.length - 1 ? "sm:col-span-2 lg:col-span-1" : "",
                  "transition-all duration-300 hover:-translate-y-2 hover:border-primary/25 hover:shadow-2xl",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-900",
                ].join(" ")}
              >
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-primary" />

                {/* Background image */}
                <div aria-hidden="true" className="absolute inset-0">
                  <Image
                    src={c.icon}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={[
                      "object-cover",
                      c.bgFocusClass,
                      c.bgScaleClass ?? "",
                      "opacity-30 transition-all duration-500 will-change-transform",
                      c.bgHoverScaleClass ?? "group-hover:scale-[1.06]",
                      "group-hover:opacity-40 lg:group-hover:opacity-100",
                    ].join(" ")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-surface/15 via-neutral-surface/75 to-neutral-surface transition-opacity duration-300 group-hover:opacity-85 lg:group-hover:opacity-40" />
                </div>

                <div className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-9">
                  <div className="flex h-full min-w-0 flex-col">
                    <h3 className="font-heading text-lg font-black uppercase tracking-tight text-neutral-ink sm:text-xl md:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-muted sm:mt-3 sm:text-base md:text-lg">{c.body}</p>

                    <div className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-black uppercase tracking-wide text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary-900 sm:pt-7 sm:text-sm">
                      Learn more <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}