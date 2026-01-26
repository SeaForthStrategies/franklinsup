interface HomeExperienceDonateProps {
  donateUrl: string;
  amounts?: Array<{ label: string; value?: number }>;
}

const DEFAULT_AMOUNTS: Array<{ label: string; value?: number }> = [
  { label: "$30", value: 30 },
  { label: "$55", value: 55 },
  { label: "$99", value: 99 },
  { label: "$250", value: 250 },
  { label: "$500", value: 500 },
  { label: "Other" },
];

export function HomeExperienceDonate({
  donateUrl,
  amounts = DEFAULT_AMOUNTS,
}: HomeExperienceDonateProps) {
  return (
    <section aria-labelledby="experience-title" className="bg-neutral-base py-16 sm:py-20">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/80">
              <span className="h-3 w-3 rounded bg-gradient-to-br from-accent-400 to-secondary-500 shadow-sm" aria-hidden="true" />
              Endorsements
            </div>

            <h2
              id="experience-title"
              className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl gradient-primary"
            >
              Experience &amp; Focused
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-neutral-slate">
              After 14 years of elected public service, I’m ready to meet the challenges our region
              faces. I’m a husband, a local small business-owner, a Mayor, and a proud member of the
              North County community.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card">
              <div className="h-2 gradient-patriot" aria-hidden="true" />

              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary-900">
                  Donate
                </h3>
                <p className="mt-3 text-sm text-neutral-muted">
                  Please help me stand firm for you and our families by making a contribution today.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {amounts.map((a) => (
                    <a
                      key={a.label}
                      href={donateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-amount={a.value}
                      className={[
                        "inline-flex items-center justify-center rounded-xl border border-neutral-border bg-neutral-base px-4 py-3",
                        "text-sm font-black uppercase tracking-wide text-primary transition-all duration-200",
                        "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      ].join(" ")}
                    >
                      {a.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-cta site-cta--primary w-full"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

