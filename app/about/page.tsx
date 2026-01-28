import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About – Leadership for San Diego County",
  openGraph: {
    title: "About – Leadership for San Diego County",
    url: "https://franklinforsupervisor.com/about",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="about-hero-title" className="relative isolate overflow-hidden bg-neutral-base">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
          <div className="absolute -top-24 left-[-10%] h-[420px] w-[760px] rounded-full bg-blue-200/20 blur-3xl" />
          <div className="absolute -top-28 right-[-10%] h-[420px] w-[740px] rounded-full bg-blue-200/16 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <header className="motion-reduce:animate-none animate-[fadeInUp_0.6s_ease-out_backwards]">
              <h1
                id="about-hero-title"
                className="text-balance text-3xl font-black normal-case tracking-tight text-primary sm:text-4xl md:text-5xl"
              >
                Hi, I’m John Franklin
              </h1>
              <p className="mt-4 text-base font-black normal-case text-neutral-slate sm:text-lg">
                Husband, business owner, public servant
              </p>
            </header>
          </div>

          {/* Supporting images (match live site: 3 images under heading) */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <figure className="relative overflow-hidden rounded-3xl border border-white/18 bg-black/25 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[16/12] bg-neutral-ink">
                <Image
                  src="https://franklinforsupervisor.com/wp-content/uploads/2024/08/JohnShanna1EL.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-[50%_30%] sm:object-[50%_25%]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
              </div>
            </figure>

            <figure className="relative overflow-hidden rounded-3xl border border-white/18 bg-black/25 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[16/12] bg-neutral-ink">
                <Image
                  src="https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0419-Copy-1024x683.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-[50%_30%] sm:object-[50%_25%]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
              </div>
            </figure>

            <figure className="relative overflow-hidden rounded-3xl border border-white/18 bg-black/25 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[16/12] bg-neutral-ink">
                <Image
                  src="https://franklinforsupervisor.com/wp-content/uploads/2024/07/347799573_644190660379563_4869575071748284670_n-1024x782.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-[50%_28%] sm:object-[50%_24%]"
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
          <div className="mx-auto w-full max-w-6xl grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
              <h2 className="text-2xl font-black normal-case tracking-tight text-primary sm:text-3xl">Mayor John Franklin</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-slate">
                <p>
                  The fourth directly elected Mayor of the City of Vista, John Franklin is a Vista resident, homeowner, business-owner and
                  employer. Public service is his passion.
                </p>
                <p>
                  First publicly elected in 2012 to serve on the Vista Irrigation District Board of Directors, Franklin was elected to the Vista
                  City Council in 2014, re-elected in 2018 and elected Mayor in 2022.
                </p>
                <p>
                  Elected on a platform focusing on solutions to homelessness and improved public safety, Mayor Franklin led the creation of
                  Vista’s award-winning Homelessness Strategic Plan.
                </p>
                <p className="font-semibold text-neutral-ink">
                  Elected Deputy Mayor by a majority of the City Council three times, Franklin has also served in a variety of leadership
                  capacities including:
                </p>
                <ul className="space-y-2 pl-5" role="list">
                  <li>North County Transit District Board of Directors</li>
                  <li>(SANDAG) The San Diego Association of Governments</li>
                  <li>The North County Emergency Dispatch JPA Board of Directors, (past Chairman)</li>
                  <li>Encina Wastewater Authority Board of Directors</li>
                </ul>
              </div>
            </article>

            <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
              <h2 className="text-2xl font-black normal-case tracking-tight text-primary sm:text-3xl">Personal Life</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-slate">
                <p>
                  John graduated from the American University in Washington, D.C. where he earned a Bachelor of Arts degree. In Washington,
                  D.C., he worked on Capitol Hill for two members of the United States House of Representatives as a policy advisor.
                </p>
                <p>
                  John met his wife Shanna and fell in love in Vista. They proudly call Vista home and will celebrate thirteen years of
                  marriage.
                </p>
                <p>
                  Opening the doors to his own business in Vista in 2011, today John &amp; Shanna work together in the family business which
                  serves non-profit organizations, public leaders and private companies, providing business management and administration
                  services. The firm also specializes in marketing and public communications.
                </p>
                <p>
                  John &amp; Shanna are proud members of the Vista Chamber of Commerce and John is a member of the Vista Optimists Club.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

