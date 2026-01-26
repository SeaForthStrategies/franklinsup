interface HomeCommonSenseProps {
  learnMoreHref?: string;
}

export function HomeCommonSense({ learnMoreHref = "/issues" }: HomeCommonSenseProps) {
  return (
    <section aria-labelledby="commonsense-title" className="relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[720px] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[-15%] h-[420px] w-[720px] rounded-full bg-cyan-200/18 blur-3xl" />
      </div>

      <div className="site-container relative">
        <header className="max-w-3xl">
          <h2
            id="commonsense-title"
            className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl gradient-primary"
          >
            Common Sense
          </h2>
          <p className="mt-4 text-lg text-neutral-muted">
            California’s approach to solving homelessness is making the problem worse. We must elect
            leaders who have the courage to identify the problem and take bold action to solve it.
            I’m focused on our County’s most pressing issues, and I’m working to implement real
            solutions to them.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base/90 p-6 shadow-card">
            <div className="absolute inset-x-0 top-0 h-2 bg-accent" aria-hidden="true" />
            <h3 className="mt-2 font-heading text-xl font-black uppercase tracking-tight text-neutral-ink">
              Fire Prevention
            </h3>
            <p className="mt-3 text-sm text-neutral-muted">
              Proper planning could have prevented the LA wildfires. San Diego County needs to
              ensure that does not happen here.
            </p>
            <a
              href={learnMoreHref}
              className="mt-5 inline-flex items-center justify-center rounded-full border-2 border-secondary/70 px-6 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
            >
              Learn More
            </a>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base/90 p-6 shadow-card">
            <div className="absolute inset-x-0 top-0 h-2 bg-accent" aria-hidden="true" />
            <h3 className="mt-2 font-heading text-xl font-black uppercase tracking-tight text-neutral-ink">
              Fix our Roads
            </h3>
            <p className="mt-3 text-sm text-neutral-muted">
              I will finally fix the 78 corridor. SANDAG has failed to fix the SR-78/I-5 interchange
              and the SR-78/I-15 interchange they’ve promised for decades.
            </p>
            <a
              href={learnMoreHref}
              className="mt-5 inline-flex items-center justify-center rounded-full border-2 border-secondary/70 px-6 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
            >
              Learn More
            </a>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base/90 p-6 shadow-card">
            <div className="absolute inset-x-0 top-0 h-2 bg-accent" aria-hidden="true" />
            <h3 className="mt-2 font-heading text-xl font-black uppercase tracking-tight text-neutral-ink">
              Community
            </h3>
            <p className="mt-3 text-sm text-neutral-muted">
              Strong communities are the backbone of our nation, where families, faith, and
              neighbors come together to uphold our values and secure a brighter future.
            </p>
            <a
              href={learnMoreHref}
              className="mt-5 inline-flex items-center justify-center rounded-full border-2 border-secondary/70 px-6 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
            >
              Learn More
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

