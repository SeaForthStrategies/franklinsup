interface CallToActionProps {
  title: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CallToAction({
  title,
  body,
  primaryCta,
  secondaryCta,
}: CallToActionProps) {
  return (
    <section id="get-involved" aria-labelledby="cta-title" className="relative overflow-hidden bg-neutral-base py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_20%_10%,rgba(59,130,246,.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_80%_90%,rgba(27,92,255,.12),transparent_62%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card">
          <div className="h-2 gradient-patriot" aria-hidden="true" />

          <div className="p-8 md:p-10">
            <h2
              id="cta-title"
              className="font-heading text-3xl font-black uppercase tracking-tight text-neutral-ink md:text-4xl"
            >
              {title}
            </h2>
            {body ? (
              <p className="mt-4 max-w-3xl text-lg text-neutral-slate">
                {body}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3 text-base font-black uppercase tracking-wide text-white transition-colors hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {primaryCta.label}
              </a>

              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-secondary/70 px-7 py-3 text-base font-black uppercase tracking-wide text-neutral-ink transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

