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
    <section aria-labelledby="support-title" className="relative bg-neutral-base py-12 sm:py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="support-title" className="text-3xl font-black uppercase tracking-tight text-primary-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-slate sm:mt-4 sm:text-base md:text-lg">
            Chip in what you can to power a grassroots campaign focused on public safety, preparedness, and results.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
            {AMOUNTS.map((a) => (
              <a
                key={a.label}
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-amount={a.value}
                className="inline-flex min-w-[90px] items-center justify-center rounded-full border border-neutral-border bg-neutral-surface px-4 py-2.5 text-xs font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:min-w-[110px] sm:px-6 sm:py-3 sm:text-sm"
              >
                {a.label}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="site-cta site-cta--primary w-full sm:w-auto">
              Donate
            </a>
            <a href={volunteerUrl} target="_blank" rel="noopener noreferrer" className="site-cta site-cta--secondary w-full sm:w-auto">
              Volunteer
            </a>
            <a
              href={CONTACT_URL}
              className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-neutral-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
            >
              Get updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

