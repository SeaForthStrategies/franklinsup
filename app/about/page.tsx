import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | My campaign for Supervisor 2026",
  description:
    "Learn more about me — my record of service, priorities, and why I’m running to represent San Diego County District 5.",
  openGraph: {
    title: "About | My campaign for Supervisor 2026",
    description:
      "Learn more about me — my record of service, priorities, and why I’m running to represent San Diego County District 5.",
    url: "https://franklinforsupervisor.com/about",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-base">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
          <div className="absolute -top-24 left-[-10%] h-[420px] w-[760px] rounded-full bg-blue-200/20 blur-3xl" />
          <div className="absolute -top-28 right-[-10%] h-[420px] w-[740px] rounded-full bg-blue-200/16 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <header className="motion-reduce:animate-none animate-[fadeInUp_0.6s_ease-out_backwards]">
            <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-slate/80">
              <span
                className="h-3 w-3 rounded bg-gradient-to-br from-primary to-secondary shadow-sm"
                aria-hidden="true"
              />
              About
            </div>

            <h1 className="mt-3 text-balance text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl md:text-5xl">
              Hi, I’m running to serve District 5
            </h1>
            <p className="mt-4 max-w-2xl text-base text-neutral-muted sm:text-lg">
              Husband, business owner, public servant.
            </p>
          </header>

          {/* Photo strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
            <figure className="group relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card">
              <div className="relative aspect-[4/3] bg-neutral-ink">
                <Image
                  src="https://franklinforsupervisor.com/wp-content/uploads/2024/08/JohnShanna1EL.png"
                  alt="Me and my wife, Shanna"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
              </div>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card">
              <div className="relative aspect-[4/3] bg-neutral-ink">
                <Image
                  src="https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0419-Copy-1024x683.jpg"
                  alt="Me meeting neighbors in the community"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
              </div>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card">
              <div className="relative aspect-[4/3] bg-neutral-ink">
                <Image
                  src="https://franklinforsupervisor.com/wp-content/uploads/2024/07/347799573_644190660379563_4869575071748284670_n-1024x782.jpg"
                  alt="Me speaking with community members"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-neutral-border/60 bg-neutral-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Public service */}
              <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
                <h2 className="text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl">
                  My public service
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-slate">
                  <p>
                    I’m the fourth directly elected Mayor of the City of Vista. I’m a Vista resident, homeowner, business owner, and employer —
                    and public service is my passion.
                  </p>
                  <p>
                    I was first elected in 2012 to serve on the Vista Irrigation District Board of Directors. I was elected to the Vista City
                    Council in 2014, re-elected in 2018, and elected Mayor in 2022.
                  </p>
                  <p>
                    I was elected on a platform focused on solutions to homelessness and improved public safety — and as Mayor I led the creation
                    of Vista’s award-winning Homelessness Strategic Plan.
                  </p>
                  <p className="font-semibold text-neutral-ink">I’ve also served in leadership roles including:</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {[
                      "North County Transit District Board of Directors",
                      "SANDAG (San Diego Association of Governments)",
                      "North County Emergency Dispatch JPA Board of Directors (past Chairman)",
                      "Encina Wastewater Authority Board of Directors",
                    ].map((item) => (
                      <li key={item} className="grid grid-cols-[16px_1fr] items-start gap-3 text-sm font-semibold text-neutral-slate">
                        <span
                          aria-hidden="true"
                          className="mt-1 h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-primary to-secondary shadow-sm"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Personal life */}
              <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
                <h2 className="text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl">
                  My personal life
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-slate">
                  <p>
                    I graduated from American University in Washington, D.C., where I earned a Bachelor of Arts degree. While I was there, I
                    worked on Capitol Hill for two members of the U.S. House of Representatives as a policy advisor.
                  </p>
                  <p>
                    I met my wife, Shanna, in Vista. We proudly call Vista home, and we’ll be celebrating thirteen years of marriage.
                  </p>
                  <p>
                    I opened my own business in Vista in 2011. Today, Shanna and I work together in our family business serving nonprofit
                    organizations, public leaders, and private companies with business management and administration services — with a specialty
                    in marketing and public communications.
                  </p>
                  <p>
                    We’re proud members of the Vista Chamber of Commerce, and I’m a member of the Vista Optimists Club.
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-6 lg:sticky lg:top-28 lg:self-start">
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs">Quick links</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link className="site-cta site-cta--secondary" href="/issues">
                  Issues
                </Link>
                <Link className="site-cta site-cta--secondary" href="/news">
                  News
                </Link>
                <a
                  className="site-cta site-cta--primary"
                  href="https://secure.franklinforsupervisor.com/15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-border bg-neutral-surface p-4">
                <p className="text-xs font-black uppercase tracking-widest text-neutral-slate/80">In one sentence</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-muted">
                  I’m focused on safer communities, responsible budgeting, and a county government that delivers measurable results.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

