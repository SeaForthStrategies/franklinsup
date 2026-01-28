import type { Metadata } from "next";

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
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-base">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
          <div className="absolute -top-24 left-[-10%] h-[420px] w-[760px] rounded-full bg-blue-200/20 blur-3xl" />
          <div className="absolute -top-28 right-[-10%] h-[420px] w-[740px] rounded-full bg-blue-200/16 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-18 lg:px-8 lg:py-20">
          <header className="mx-auto max-w-3xl text-center motion-reduce:animate-none animate-[fadeInUp_0.6s_ease-out_backwards]">
            <h1 className="text-balance text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl md:text-5xl">
              About District 5
            </h1>
          </header>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-neutral-border/60 bg-neutral-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-6xl grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-8 lg:col-span-7">
              <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
                <h2 className="text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl">District Overview</h2>
                <div className="mt-4 space-y-5 text-base leading-relaxed text-neutral-slate">
                  <p>
                    San Diego County’s Fifth Supervisorial District includes some of the most dynamic and diverse communities in North County. It
                    spans from the coastal city of Oceanside to the rural heartland of Valley Center and Palomar Mountain. The district
                    encompasses vibrant suburban neighborhoods, military communities, agricultural areas, and Tribal lands.
                  </p>

                  <ul className="grid gap-3" role="list">
                    <li className="rounded-2xl border border-neutral-border bg-neutral-surface p-4">
                      <div className="text-sm font-semibold text-neutral-slate">
                        <strong className="text-neutral-ink">Major Cities:</strong> Oceanside, Vista, Carlsbad, San Marcos
                      </div>
                    </li>
                    <li className="rounded-2xl border border-neutral-border bg-neutral-surface p-4">
                      <div className="text-sm font-semibold text-neutral-slate">
                        <strong className="text-neutral-ink">Unincorporated Communities:</strong> Bonsall, Fallbrook, Valley Center, Borrego
                        Springs
                      </div>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl">Fast Facts</h3>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-4">
                    <dt className="text-xs font-black uppercase tracking-widest text-neutral-slate/80">Population:</dt>
                    <dd className="mt-2 text-sm font-semibold text-neutral-ink">~650,000</dd>
                  </div>
                  <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-4">
                    <dt className="text-xs font-black uppercase tracking-widest text-neutral-slate/80">Area:</dt>
                    <dd className="mt-2 text-sm font-semibold text-neutral-ink">Over 1,800 square miles</dd>
                  </div>
                </dl>
              </article>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <article className="rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card sm:rounded-3xl sm:p-7">
                <h2 className="sr-only">District 5 map</h2>
                <div className="rounded-2xl border border-neutral-border bg-neutral-surface p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-xl border border-neutral-border bg-neutral-surface sm:rounded-2xl">
                    <div className="h-[260px] w-full sm:h-[320px] lg:h-[520px]">
                      <iframe
                        title="District 5 map"
                        src="https://www.google.com/maps/d/embed?mid=16tRi94i4D9NRiu6AGA2J00eeTVm_a-A&ehbc=2E312F"
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

