import Image from "next/image";

interface HomeIconIssuesProps {
  learnMoreHref?: string;
}

const CARDS = [
  {
    title: "Fire Prevention",
    body:
      "Proper planning could have prevented the LA wildfires. San Diego County needs to ensure that does not happen here.",
    icon: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/Fire.png",
  },
  {
    title: "Fix our Roads",
    body:
      "I will finally fix the 78 corridor. SANDAG has failed to fix the SR-78/I-5 interchange and the SR-78/I-15 interchange they’ve promised for decades.",
    icon: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/traffic.png",
  },
  {
    title: "Community",
    body:
      "Strong communities are the backbone of our nation, where families, faith, and neighbors come together to uphold our values and secure a brighter future.",
    icon: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/Safety.png",
  },
] as const;

export function HomeIconIssues({ learnMoreHref = "/issues" }: HomeIconIssuesProps) {
  return (
    <section
      id="priorities"
      aria-labelledby="home-issues-title"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[720px] rounded-full bg-cyan-200/16 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-15%] h-[420px] w-[720px] rounded-full bg-blue-200/14 blur-3xl" />
      </div>

      <div className="site-container relative">
        <header className="text-center">
          <div className="mx-auto inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-slate/80">
            <span className="h-3 w-3 rounded bg-gradient-to-br from-accent-400 to-secondary-500 shadow-sm" aria-hidden="true" />
            Common Sense Priorities
          </div>
          <h2 id="home-issues-title" className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl gradient-primary text-balance">
            Real problems. Real solutions.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-muted sm:text-lg">
            Focused on safety, infrastructure, and strong communities across North County.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-accent" aria-hidden="true" />
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(25,183,255,.10),transparent_60%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <div className="mx-auto mt-1 flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-surface ring-1 ring-primary/10">
                <Image src={c.icon} alt="" width={96} height={96} className="h-14 w-14 drop-shadow-sm" />
              </div>

              <h3 className="mt-5 text-center font-heading text-xl font-black uppercase tracking-tight text-neutral-ink">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-muted">{c.body}</p>

              <div className="mt-6 flex justify-center">
                <a
                  href={learnMoreHref}
                  className="inline-flex items-center justify-center rounded-full border-2 border-secondary/70 px-7 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

