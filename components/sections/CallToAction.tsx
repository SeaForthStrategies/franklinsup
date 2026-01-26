interface CallToActionProps {
  title: string;
  body: string;
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
    <section aria-labelledby="cta-title" className="bg-neutral-surface py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base shadow-card">
          <div className="h-2 gradient-patriot" aria-hidden="true" />

          <div className="p-8 md:p-10">
            <h2
              id="cta-title"
              className="font-heading text-3xl font-black uppercase tracking-tight text-primary-900 md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-neutral-slate">
              {body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary px-7 py-3 text-base font-black uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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

