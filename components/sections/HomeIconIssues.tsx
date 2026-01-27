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
    bgScaleClass: "scale-[0.92]",
    bgHoverScaleClass: "group-hover:scale-[0.98]",
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
      className="relative overflow-hidden bg-primary-900 py-14 text-white sm:py-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="home-issues-title" className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Real problems. Real solutions.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Practical, results-focused leadership on the issues that affect families across North County every day.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {CARDS.map((c) => {
            const topicHref = `${issuesBaseHref}#${c.id}`;

            return (
              <Link
                key={c.id}
                href={topicHref}
                className={[
                  "group relative block h-full min-h-[320px] overflow-hidden rounded-3xl border border-neutral-border bg-neutral-surface shadow-card",
                  "transition-all duration-300 hover:-translate-y-2 hover:border-primary/25 hover:shadow-2xl",
                  "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary-900",
                ].join(" ")}
              >
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-secondary" />

                {/* Background image */}
                <div aria-hidden="true" className="absolute inset-0">
                  <Image
                    src={c.icon}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={[
                      "object-cover",
                      c.bgFocusClass,
                      c.bgScaleClass ?? "",
                      "opacity-35 transition-transform duration-500 will-change-transform",
                      c.bgHoverScaleClass ?? "group-hover:scale-[1.06]",
                      "group-hover:opacity-45",
                    ].join(" ")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-surface/15 via-neutral-surface/75 to-neutral-surface transition-opacity duration-300 group-hover:opacity-85" />
                </div>

                <div className="relative z-10 flex h-full flex-col p-8 sm:p-9">
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-black uppercase tracking-tight text-neutral-ink sm:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-muted sm:text-base">{c.body}</p>

                    <div className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-secondary">
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

