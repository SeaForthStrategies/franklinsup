import type { ReactNode } from "react";

interface HeroProps {
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  donateUrl: string;
  volunteerUrl: string;
  donateLabel?: string;
  volunteerLabel?: string;
}

export function Hero({
  kicker = "San Diego County Supervisor • District 5",
  title,
  subtitle,
  donateUrl,
  volunteerUrl,
  donateLabel = "Donate",
  volunteerLabel = "Volunteer",
}: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-neutral-base via-sky-50/60 to-neutral-surface py-20 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-[520px] w-[780px] rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute right-[-15%] top-[-25%] h-[520px] w-[780px] rounded-full bg-blue-200/25 blur-3xl" />
      </div>

      <div className="site-container relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-xs font-black uppercase tracking-widest text-primary/80">
              {kicker}
            </p>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-5xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl gradient-primary"
          >
            {title}
          </h1>

          {subtitle ? (
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-slate md:text-2xl">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta site-cta--primary text-base md:text-sm"
            >
              {donateLabel}
            </a>
            <a
              href={volunteerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta site-cta--secondary text-base md:text-sm"
            >
              {volunteerLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

