import { IssuesVideoCard } from "@/components/sections/IssuesVideoCard.client";

export interface IssuesVideoItem {
  title: string;
  videoId: string;
  start?: number;
}

interface IssuesVideosSectionProps {
  title?: string;
  subtitle?: string;
  volunteerUrl: string;
  items: IssuesVideoItem[];
  borderless?: boolean;
}

export function IssuesVideosSection({
  title = "My take on the issues",
  subtitle = "Short videos where I lay out the issue, the stakes, and what San Diego County should do next.",
  volunteerUrl,
  items,
  borderless = false,
}: IssuesVideosSectionProps) {
  return (
    <section aria-labelledby="issues-videos-title" className="relative isolate overflow-hidden bg-neutral-base py-12 sm:py-16 md:py-20">
      {/* Soft gradient background with lighter blues */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
        <div className="absolute -top-24 left-[-10%] h-[320px] w-[500px] rounded-full bg-primary/10 blur-3xl sm:h-[420px] sm:w-[700px] md:h-[520px] md:w-[900px]" />
        <div className="absolute -top-40 right-[-10%] h-[280px] w-[450px] rounded-full bg-primary/8 blur-3xl sm:h-[380px] sm:w-[650px] md:h-[480px] md:w-[820px]" />
      </div>

      <div className="relative site-container">
        <header className="mx-auto max-w-3xl text-center px-4 sm:px-0">
          <h1 id="issues-videos-title" className="text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-neutral-muted sm:mt-4 sm:text-base md:text-lg">
            {subtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6">
            <a
              href={volunteerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta site-cta--primary text-sm py-3 px-6 sm:text-base sm:py-3.5 sm:px-8"
            >
              Volunteer
            </a>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <IssuesVideoCard
              key={item.videoId}
              title={item.title}
              videoId={item.videoId}
              start={item.start}
              borderless={borderless}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

