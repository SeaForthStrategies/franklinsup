import Image from "next/image";
import Link from "next/link";

interface HomeHeroProps {
  donateUrl: string;
  volunteerUrl: string;
  endorsementsHref?: string;
}

const HERO_IMAGE =
  "https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0419-Copy-1024x683.jpg";

const AMOUNTS: Array<{ label: string; value?: number }> = [
  { label: "$30", value: 30 },
  { label: "$55", value: 55 },
  { label: "$99", value: 99 },
  { label: "Other" },
];

export function HomeHero({
  donateUrl,
  volunteerUrl,
  endorsementsHref = "/endorsements",
}: HomeHeroProps) {
  return (
    <section aria-labelledby="home-hero-title" className="relative overflow-hidden bg-neutral-base">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[820px] rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[-25%] h-[520px] w-[820px] rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      {/* Split-screen hero: full-bleed image left, content right */}
      <div className="relative grid lg:min-h-[620px] lg:grid-cols-2">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-neutral-surface shadow-card sm:min-h-[460px] lg:min-h-0 lg:rounded-l-none lg:rounded-r-[2rem] lg:shadow-none">
          <Image
            src={HERO_IMAGE}
            alt="John Franklin"
            fill
            className="object-cover object-[50%_12%]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>

        <div className="relative">
          <div className="site-container py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-xl lg:ml-0">
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-slate/80">
                <span
                  className="h-3 w-3 rounded bg-gradient-to-br from-accent-400 to-secondary-500 shadow-sm"
                  aria-hidden="true"
                />
                Mayor • Small Business Owner • Husband
              </div>

              <h1
                id="home-hero-title"
                className="mt-4 text-balance text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl gradient-primary"
              >
                A Safer, Cleaner
                <br />
                North County
              </h1>

              <p className="mt-5 text-lg text-neutral-muted">
                After 14 years of elected public service, I&apos;m ready to meet the challenges our
                region faces. Focused on public safety, fire prevention, fixing our roads, and
                strong communities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-cta site-cta--primary"
                >
                  Donate
                </a>
                <a
                  href={volunteerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-cta site-cta--secondary"
                >
                  Volunteer
                </a>
                <Link
                  href={endorsementsHref}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Endorsements
                </Link>
              </div>

              <div className="mt-8">
                <p className="text-xs font-black uppercase tracking-widest text-neutral-muted">Quick donate</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {AMOUNTS.map((a) => (
                    <a
                      key={a.label}
                      href={donateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-amount={a.value}
                      className="inline-flex items-center justify-center rounded-full border border-neutral-border bg-neutral-base px-4 py-2 text-xs font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

