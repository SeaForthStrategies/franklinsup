const AMOUNTS: Array<{ label: string; value?: number }> = [
  { label: "$25", value: 25 },
  { label: "$50", value: 50 },
  { label: "$100", value: 100 },
  { label: "$250", value: 250 },
  { label: "Other" },
];

const CONTACT_URL =
  "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

interface HomeSupportDonateProps {
  donateUrl: string;
  volunteerUrl: string;
  title?: string;
}

export function HomeSupportDonate({
  donateUrl,
  volunteerUrl,
  title = "Donate to support my campaign",
}: HomeSupportDonateProps) {
  return (
    <section aria-labelledby="support-title" className="relative bg-neutral-base py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="support-title" className="text-4xl font-black uppercase tracking-tight text-primary-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-slate sm:text-lg">
            Chip in what you can to power a grassroots campaign focused on public safety, preparedness, and results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {AMOUNTS.map((a) => (
              <a
                key={a.label}
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-amount={a.value}
                className="inline-flex min-w-[110px] items-center justify-center rounded-full border border-neutral-border bg-neutral-surface px-6 py-3 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {a.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="site-cta site-cta--primary">
              Donate
            </a>
            <a href={volunteerUrl} target="_blank" rel="noopener noreferrer" className="site-cta site-cta--secondary">
              Volunteer
            </a>
            <a
              href={CONTACT_URL}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

