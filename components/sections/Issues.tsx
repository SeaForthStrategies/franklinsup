interface IssueItem {
  title: string;
  description: string;
}

interface IssuesProps {
  title?: string;
  subtitle?: string;
  items: IssueItem[];
}

export function Issues({
  title = "Priorities",
  subtitle = "Solutions that put families first",
  items,
}: IssuesProps) {
  return (
    <section aria-labelledby="issues-title" className="bg-neutral-base py-16">
      <div className="mx-auto max-w-content px-6">
        <header className="text-center">
          <h2
            id="issues-title"
            className="text-4xl font-black uppercase tracking-tight md:text-5xl gradient-primary"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-muted">
            {subtitle}
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((issue) => (
            <article
              key={issue.title}
              className="relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-accent" aria-hidden="true" />
              <h3 className="mt-2 font-heading text-xl font-black uppercase tracking-tight text-neutral-ink">
                {issue.title}
              </h3>
              <p className="mt-3 text-neutral-slate">
                {issue.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

