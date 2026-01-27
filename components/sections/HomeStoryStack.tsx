import Image from "next/image";

interface StoryItem {
  title: string;
  body: string;
  imageUrl: string;
}

interface HomeStoryStackProps {
  items: StoryItem[];
}

export function HomeStoryStack({ items }: HomeStoryStackProps) {
  return (
    <section aria-label="About and agenda" className="bg-neutral-base py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          {items.map((item, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={item.title}
                className={[
                  "grid items-center gap-8 rounded-3xl border border-neutral-border bg-neutral-surface p-6 shadow-card",
                  "md:grid-cols-12 md:p-10",
                  reverse ? "md:[&>div:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div className="md:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.imageUrl}
                        alt=""
                        fill
                        className="object-cover object-[50%_22%]"
                        sizes="(min-width: 768px) 40vw, 100vw"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <h2 className="text-3xl font-black uppercase tracking-tight text-primary-900 sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-slate sm:text-lg">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

