import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "District 5 – Leadership for San Diego County",
  description:
    "About District 5 — San Diego County’s Fifth Supervisorial District in North County.",
  openGraph: {
    title: "District 5 – Leadership for San Diego County",
    description: "About District 5 — San Diego County’s Fifth Supervisorial District in North County.",
    url: "https://franklinforsupervisor.com/district-5/",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function District5Page() {
  const factCards = [
    { label: "Population", value: "~650,000 residents" },
    { label: "Area", value: "Over 1,800 square miles" },
    { label: "Communities", value: "Cities, rural areas, and Tribal lands" },
    { label: "Region", value: "North County San Diego" },
  ] as const;

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-base">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
          <div className="absolute -top-24 left-[-10%] h-[300px] w-[500px] rounded-full bg-blue-200/20 blur-3xl sm:h-[420px] sm:w-[760px]" />
          <div className="absolute -top-28 right-[-10%] h-[300px] w-[500px] rounded-full bg-blue-200/16 blur-3xl sm:h-[420px] sm:w-[740px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <header className="mx-auto max-w-3xl text-center motion-reduce:animate-none animate-[fadeInUp_0.6s_ease-out_backwards]">
            <h1 className="text-balance text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              About District 5
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-slate sm:text-base md:text-lg">
              District 5 spans the heart of North County. It includes coastal cities, suburban neighborhoods, agricultural communities, and
              Tribal lands that shape our region&apos;s future.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/issues"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white transition hover:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                See my priorities
              </Link>
              <Link
                href="/about"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-primary/20 px-5 text-sm font-bold text-primary transition hover:border-primary/40 hover:bg-primary/5"
              >
                Learn more about me
              </Link>
            </div>
          </header>
        </div>
      </section>

      <section className="border-t border-neutral-border/60 bg-neutral-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-6xl grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="order-2 space-y-5 sm:space-y-8 lg:order-1 lg:col-span-7">
              <article className="relative overflow-hidden rounded-xl border border-neutral-border bg-neutral-base p-4 shadow-card sm:rounded-2xl sm:p-5 md:rounded-3xl md:p-7">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-700 to-secondary" />
                <h2 className="text-xl font-black uppercase tracking-tight text-primary sm:text-2xl md:text-3xl">District Overview</h2>
                <div className="mt-3 space-y-4 text-sm leading-relaxed text-neutral-slate sm:mt-4 sm:space-y-5 sm:text-base">
                  <p>
                    San Diego County’s Fifth Supervisorial District includes some of the most dynamic and diverse communities in North County. It
                    spans from the coastal city of Oceanside to the rural heartland of Valley Center and Palomar Mountain. The district
                    encompasses vibrant suburban neighborhoods, military communities, agricultural areas, and Tribal lands.
                  </p>

                  <ul className="grid gap-2 sm:gap-3" role="list">
                    <li className="rounded-xl border border-neutral-border bg-neutral-surface p-3 sm:rounded-2xl sm:p-4">
                      <div className="text-xs font-semibold text-neutral-slate sm:text-sm">
                        <strong className="text-neutral-ink">Major Cities:</strong> Oceanside, Vista, Escondido, San Marcos
                      </div>
                    </li>
                    <li className="rounded-xl border border-neutral-border bg-neutral-surface p-3 sm:rounded-2xl sm:p-4">
                      <div className="text-xs font-semibold text-neutral-slate sm:text-sm">
                        <strong className="text-neutral-ink">Unincorporated Communities:</strong> Bonsall, Fallbrook, Valley Center, Borrego
                        Springs
                      </div>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-xl border border-neutral-border bg-neutral-base p-4 shadow-card sm:rounded-2xl sm:p-5 md:rounded-3xl md:p-7">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-700 to-secondary" />
                <h3 className="text-xl font-black uppercase tracking-tight text-primary sm:text-2xl md:text-3xl">Fast Facts</h3>
                <dl className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                  {factCards.map((fact) => (
                    <div key={fact.label} className="rounded-xl border border-neutral-border bg-neutral-surface p-3 sm:rounded-2xl sm:p-4">
                      <dt className="text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs">{fact.label}</dt>
                      <dd className="mt-1.5 text-xs font-semibold text-neutral-ink sm:mt-2 sm:text-sm">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>

            <aside className="order-1 flex lg:order-2 lg:col-span-5">
              <article className="flex w-full flex-col rounded-xl border border-neutral-border bg-neutral-base p-4 shadow-card sm:rounded-2xl sm:p-5 md:rounded-3xl md:p-7 lg:sticky lg:top-24">
                <h2 className="text-lg font-black uppercase tracking-tight text-primary sm:text-xl">District 5 map</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-slate">
                  This map shows the full district footprint from coastal North County to inland communities.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-neutral-border bg-neutral-surface shadow-sm sm:rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-surface">
                    <Image
                      src="https://franklinforsupervisor.com/wp-content/uploads/2026/02/Screenshot-2026-02-02-at-10.55.02-AM.png"
                      alt="District 5 map"
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-slate/75 sm:text-sm">
                  District boundaries shown for quick reference.
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

