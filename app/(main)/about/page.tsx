import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_IN } from "@/src/content/featuredIn";

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
  const newsLogos = FEATURED_IN.filter((item) => item.slug !== "franklin-for-supervisor");
  const heroImage = "/about-john-portrait.png";
  const galleryImages = [
    "https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0419-Copy-1024x683.jpg",
    "/mayor-franklin-carlsbad-event.png",
  ] as const;
  const familyImage = "https://franklinforsupervisor.com/wp-content/uploads/2024/08/JohnShanna1EL.png";

  return (
    <>
      <section aria-labelledby="about-hero-title" className="relative isolate overflow-hidden bg-neutral-base">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
          <div className="absolute -top-24 left-[-10%] h-[360px] w-[620px] rounded-full bg-blue-200/20 blur-3xl sm:h-[420px] sm:w-[760px]" />
          <div className="absolute -top-28 right-[-10%] h-[360px] w-[620px] rounded-full bg-blue-200/16 blur-3xl sm:h-[420px] sm:w-[740px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-12 lg:gap-10">
            <header className="motion-reduce:animate-none animate-[fadeInUp_0.6s_ease-out_backwards] text-center lg:col-span-6 lg:text-left">
              <h1
                id="about-hero-title"
                className="text-balance text-3xl font-black normal-case tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Hi, I&apos;m John Franklin
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-slate sm:text-lg lg:mx-0">
                I am a husband, business owner, and public servant focused on results for safer neighborhoods, lower homelessness, and accountable local government.
              </p>
            </header>

            <figure className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-neutral-border bg-neutral-surface shadow-card lg:col-span-6 lg:max-w-none">
              <div className="relative aspect-[16/11] bg-neutral-surface">
                <Image
                  src={heroImage}
                  alt="John Franklin portrait"
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-[50%_16%]"
                  unoptimized
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-border/60 bg-neutral-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {galleryImages.map((src, idx) => (
              <figure key={src} className="group relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card sm:rounded-3xl">
                <div className="relative aspect-[16/11] bg-neutral-surface">
                  <Image
                    src={src}
                    alt="Campaign moment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={[
                      "object-cover transition duration-500 group-hover:scale-[1.03]",
                      idx === 1 ? "object-[50%_24%]" : "object-[50%_28%]",
                    ].join(" ")}
                    unoptimized
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-border/60 bg-neutral-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-12 lg:gap-8">
            <article className="rounded-3xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:p-6 md:p-8 lg:col-span-8">
              <h2 className="text-2xl font-black normal-case tracking-tight text-primary sm:text-3xl">My public service</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-slate sm:text-base">
                <p>
                  I am the fourth directly elected Mayor of the City of Vista, and I am also a Vista resident, homeowner, business owner, and
                  employer.
                </p>
                <p>
                  I was first elected in 2012 to serve on the Vista Irrigation District Board of Directors, then elected to the Vista City Council
                  in 2014, re-elected in 2018, and elected Mayor in 2022.
                </p>
                <p>
                  I was elected on a platform focused on reducing homelessness and improving public safety, and I led the creation of Vista&apos;s
                  award-winning Homelessness Strategic Plan.
                </p>
              </div>
            </article>

            <aside className="rounded-3xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:p-6 lg:col-span-4">
              <h3 className="text-lg font-black normal-case tracking-tight text-primary sm:text-xl">Leadership roles</h3>
              <ul className="mt-3 space-y-2 pl-5 text-sm leading-relaxed text-neutral-slate marker:text-primary sm:text-base" role="list">
                <li>North County Transit District Board of Directors</li>
                <li>(SANDAG) The San Diego Association of Governments</li>
                <li>The North County Emergency Dispatch JPA Board of Directors, (past Chairman)</li>
                <li>Encina Wastewater Authority Board of Directors</li>
              </ul>
            </aside>

            <article className="rounded-3xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:p-6 md:p-8 lg:col-span-12">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-2xl font-black normal-case tracking-tight text-primary sm:text-3xl">My family and business</h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-slate sm:text-base">
                    <p>I met my wife Shanna and fell in love in Vista. We proudly call Vista home and we are celebrating fourteen years of marriage.</p>
                    <p>
                      We opened our business in Vista in 2011, and today we work together in our family business serving nonprofit organizations,
                      public leaders, and private companies with management and administration services. Our firm also specializes in marketing and
                      public communications.
                    </p>
                    <p>We are proud members of the Vista Chamber of Commerce, and I am also a member of the Vista Optimists Club.</p>
                  </div>
                </div>
                <figure className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card sm:rounded-3xl">
                  <div className="relative aspect-[16/11] bg-neutral-surface">
                    <Image
                      src={familyImage}
                      alt="John Franklin with his wife"
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-[50%_30%]"
                      unoptimized
                    />
                  </div>
                </figure>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-border/60 bg-neutral-base">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-border/80 bg-neutral-surface p-5 shadow-card sm:p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black normal-case tracking-tight text-primary sm:text-3xl">News &amp; commentary</h2>
                <p className="mt-2 max-w-2xl text-sm text-neutral-slate sm:text-base">Read local coverage and commentary about my work in North County.</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {newsLogos.map((item, idx) => (
                <Link
                  key={item.slug}
                  href={`/featured/${item.slug}`}
                  aria-label={`${item.name} coverage`}
                  className={[
                    "group relative flex min-h-20 items-center justify-center overflow-hidden rounded-xl border border-neutral-border bg-white px-4 py-4 transition-all duration-300",
                    "hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    idx % 2 === 0 ? "sm:translate-y-1" : "sm:-translate-y-1",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/70 via-white/10 to-red-100/45 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10"
                  />
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    width={520}
                    height={140}
                    className="relative z-10 h-10 w-full object-cover object-center opacity-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] transition duration-300 group-hover:scale-[1.02] sm:h-11"
                    unoptimized
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

