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
    <section id="get-involved" aria-labelledby="cta-title" className="relative overflow-hidden bg-neutral-base py-10 sm:py-16 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_20%_10%,rgba(59,130,246,.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_80%_90%,rgba(27,92,255,.12),transparent_62%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-neutral-border bg-neutral-surface shadow-card sm:rounded-2xl">
          <div className="h-1.5 gradient-patriot sm:h-2" aria-hidden="true" />

          <div className="p-6 sm:p-8 md:p-10">
            <h2
              id="cta-title"
              className="font-heading text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl md:text-4xl"
            >
              {title}
            </h2>
            {body ? (
              <p className="mt-3 max-w-3xl text-base text-neutral-slate sm:mt-4 sm:text-lg">
                {body}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-7 sm:text-base"
              >
                {primaryCta.label}
              </a>

              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-secondary/70 px-6 py-3 text-sm font-black uppercase tracking-wide text-neutral-ink transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-neutral-base sm:w-auto sm:px-7 sm:text-base"
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

