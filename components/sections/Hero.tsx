import type { ReactNode } from "react";

interface HeroProps {
  kicker?: string;
  title: ReactNode;
  subtitle: string;
  donateUrl: string;
  volunteerUrl: string;
}

export function Hero({
  kicker = "San Diego County Supervisor • District 5",
  title,
  subtitle,
  donateUrl,
  volunteerUrl,
}: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-neutral-base to-neutral-surface py-20 md:py-32"
    >
      <div className="mx-auto max-w-content px-6">
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

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-slate md:text-2xl">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-lg font-black uppercase tracking-wide text-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Donate
            </a>
            <a
              href={volunteerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-lg font-black uppercase tracking-wide text-primary transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

