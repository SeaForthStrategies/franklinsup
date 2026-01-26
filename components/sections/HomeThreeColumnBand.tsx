import Image from "next/image";

interface HomeThreeColumnBandProps {
  donateUrl: string;
}

const PHOTO_LEFT =
  "https://franklinforsupervisor.com/wp-content/uploads/2024/07/347799573_644190660379563_4869575071748284670_n-1024x782.jpg";

const PHOTO_RIGHT =
  "https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0419-Copy-1024x683.jpg";

const DEFAULT_AMOUNTS: Array<{ label: string; value?: number }> = [
  { label: "$30", value: 30 },
  { label: "$55", value: 55 },
  { label: "$99", value: 99 },
  { label: "$250", value: 250 },
  { label: "$500", value: 500 },
  { label: "Other" },
];

export function HomeThreeColumnBand({ donateUrl }: HomeThreeColumnBandProps) {
  return (
    <section
      id="about"
      aria-labelledby="home-band-title"
      className="relative overflow-hidden bg-neutral-surface py-20 sm:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[720px] rounded-full bg-cyan-200/22 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-15%] h-[420px] w-[720px] rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <article className="lg:col-span-4">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image src={PHOTO_LEFT} alt="" fill className="object-cover" sizes="(min-width: 1024px) 28vw, 92vw" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-7 sm:p-8">
                <h2
                  id="home-band-title"
                  className="text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl"
                >
                  Experience &amp; Focused
                </h2>
                <p className="mt-4 max-w-prose text-base text-neutral-muted">
                  After 14 years of elected public service, I&apos;m ready to meet the challenges our
                  region faces. I&apos;m a husband, a local small business-owner, a Mayor, and a proud
                  member of the North County community.
                </p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
              <div className="h-2 gradient-patriot" aria-hidden="true" />
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl">
                  Donate
                </h3>
                <p className="mt-4 text-base text-neutral-muted">
                  Please help me stand firm for you and our families by making a contribution today.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {DEFAULT_AMOUNTS.map((a) => (
                    <a
                      key={a.label}
                      href={donateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-amount={a.value}
                      className={[
                        "inline-flex items-center justify-center rounded-xl border border-neutral-border bg-neutral-surface px-4 py-3",
                        "text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200",
                        "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      ].join(" ")}
                    >
                      {a.label}
                    </a>
                  ))}
                </div>

                <div className="mt-7">
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

          <article className="lg:col-span-4">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image src={PHOTO_RIGHT} alt="" fill className="object-cover" sizes="(min-width: 1024px) 28vw, 92vw" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl">
                  Common Sense
                </h3>
                <p className="mt-4 max-w-prose text-base text-neutral-muted">
                  California&apos;s approach to solving homelessness is making the problem worse. We
                  must elect leaders who have the courage to identify the problem and take bold
                  action to solve it. I&apos;m focused on our County&apos;s most pressing issues, and I&apos;m
                  working to implement real solutions to them.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

