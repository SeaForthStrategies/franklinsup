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
          <div className="absolute -top-24 left-[-10%] h-[300px] w-[500px] rounded-full bg-blue-200/20 blur-3xl sm:h-[420px] sm:w-[760px]" />
          <div className="absolute -top-28 right-[-10%] h-[300px] w-[500px] rounded-full bg-blue-200/16 blur-3xl sm:h-[420px] sm:w-[740px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <header className="mx-auto max-w-3xl text-center motion-reduce:animate-none animate-[fadeInUp_0.6s_ease-out_backwards]">
            <h1 className="text-balance text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              About District 5
            </h1>
          </header>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-neutral-border/60 bg-neutral-surface">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-6xl grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="order-2 space-y-5 sm:space-y-8 lg:order-1 lg:col-span-7">
              <article className="rounded-xl border border-neutral-border bg-neutral-base p-4 shadow-card sm:rounded-2xl sm:p-5 md:rounded-3xl md:p-7">
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
                        <strong className="text-neutral-ink">Major Cities:</strong> Oceanside, Vista, Carlsbad, San Marcos
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

              <article className="rounded-xl border border-neutral-border bg-neutral-base p-4 shadow-card sm:rounded-2xl sm:p-5 md:rounded-3xl md:p-7">
                <h3 className="text-xl font-black uppercase tracking-tight text-primary sm:text-2xl md:text-3xl">Fast Facts</h3>
                <dl className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                  <div className="rounded-xl border border-neutral-border bg-neutral-surface p-3 sm:rounded-2xl sm:p-4">
                    <dt className="text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs">Population:</dt>
                    <dd className="mt-1.5 text-xs font-semibold text-neutral-ink sm:mt-2 sm:text-sm">~650,000</dd>
                  </div>
                  <div className="rounded-xl border border-neutral-border bg-neutral-surface p-3 sm:rounded-2xl sm:p-4">
                    <dt className="text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs">Area:</dt>
                    <dd className="mt-1.5 text-xs font-semibold text-neutral-ink sm:mt-2 sm:text-sm">Over 1,800 square miles</dd>
                  </div>
                </dl>
              </article>
            </div>

            <aside className="order-1 lg:order-2 lg:col-span-5 flex">
              <article className="rounded-xl border border-neutral-border bg-neutral-base p-4 shadow-card sm:rounded-2xl sm:p-5 md:rounded-3xl md:p-7 flex flex-col w-full">
                <h2 className="sr-only">District 5 map</h2>
                <div className="rounded-xl border border-neutral-border bg-neutral-surface p-2 sm:rounded-2xl sm:p-3 md:p-4 flex-1 flex">
                  <div className="relative overflow-hidden rounded-lg border border-neutral-border bg-neutral-surface sm:rounded-xl md:rounded-2xl flex-1">
                    <img
                      src="https://franklinforsupervisor.com/wp-content/uploads/2026/02/Screenshot-2026-02-02-at-10.55.02-AM.png"
                      alt="District 5 map"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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

