import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface HomeThreeColumnBandProps {
  donateUrl: string;
}

const PHOTO_LEFT =
  "https://franklinforsupervisor.com/wp-content/uploads/2024/07/347799573_644190660379563_4869575071748284670_n-1024x782.jpg";

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
      aria-labelledby="home-about-title"
      className="relative overflow-hidden bg-neutral-surface py-16 sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[720px] rounded-full bg-blue-200/18 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-15%] h-[420px] w-[720px] rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <article className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
              <div className="relative aspect-[4/3] w-full bg-[#0b1733]">
                <Image
                  src={PHOTO_LEFT}
                  alt="Meeting neighbors in District 5"
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-7 sm:p-8">
                <SectionHeader
                  eyebrow="Meet me"
                  titleId="home-about-title"
                  title="Proven local leadership"
                  lead="After 14 years of elected public service, I’m focused on safer communities, responsible spending, and county government that delivers."
                />

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full border-2 border-primary/40 bg-neutral-surface px-6 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Read my story <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/endorsements"
                    className="inline-flex items-center justify-center rounded-full border-2 border-secondary/60 px-6 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
                  >
                    See endorsements <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <article className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
              <div className="h-2 gradient-patriot" aria-hidden="true" />
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl">
                  What I’ll deliver
                </h3>
                <p className="mt-3 text-base text-neutral-muted">
                  Clear priorities, measured outcomes, and a county government that earns your trust.
                </p>

                <ul role="list" className="mt-6 grid gap-3 text-sm text-neutral-muted">
                  {[
                    { title: "Public safety", body: "Accountable action that keeps neighborhoods safe." },
                    { title: "Fire prevention", body: "Preparedness, mitigation, and smarter planning." },
                    { title: "Fix our roads", body: "Relief on key corridors and long-overdue improvements." },
                    { title: "Strong communities", body: "Quality of life, local values, real partnership." },
                  ].map((item) => (
                    <li key={item.title} className="grid grid-cols-[16px_1fr] gap-3">
                      <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-primary to-secondary shadow-sm" />
                      <div>
                        <p className="font-black uppercase tracking-wide text-neutral-ink">{item.title}</p>
                        <p className="mt-1">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="/issues"
                    className="inline-flex items-center justify-center rounded-full border-2 border-secondary/60 px-6 py-2.5 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
                  >
                    Explore the issues <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
              <div className="h-2 gradient-patriot" aria-hidden="true" />
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl">
                  Donate
                </h3>
                <p className="mt-3 text-base text-neutral-muted">
                  Chip in what you can. This campaign is powered by neighbors.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
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

                <div className="mt-6">
                  <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="site-cta site-cta--primary w-full">
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

