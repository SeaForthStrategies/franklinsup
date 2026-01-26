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
}

export function IssuesVideosSection({
  title = "John on the Issues",
  subtitle = "Short videos where John lays out the issue, the stakes, and what San Diego County should do next.",
  volunteerUrl,
  items,
}: IssuesVideosSectionProps) {
  return (
    <section aria-labelledby="issues-videos-title" className="relative overflow-hidden bg-neutral-surface py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-10%] h-[520px] w-[900px] rounded-full bg-accent-200/40 blur-3xl" />
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[820px] rounded-full bg-secondary-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h1 id="issues-videos-title" className="text-4xl font-black uppercase tracking-tight md:text-5xl gradient-primary">
            {title}
          </h1>
          <p className="mt-4 text-lg text-neutral-muted">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={volunteerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-black uppercase tracking-wide text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-6 sm:py-3"
            >
              Volunteer
            </a>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <IssuesVideoCard key={item.videoId} title={item.title} videoId={item.videoId} start={item.start} />
          ))}
        </div>
      </div>
    </section>
  );
}

