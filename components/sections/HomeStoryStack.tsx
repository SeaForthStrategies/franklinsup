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
    <section aria-label="About and agenda" className="relative overflow-hidden bg-neutral-ink py-12 sm:py-20 md:py-28 lg:py-32">
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 text-center sm:mb-14 md:mb-20">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Leadership You Can Trust
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12">
          {items.map((item, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={item.title}
                className={[
                  "group relative grid items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]",
                  "sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-12 md:gap-10 md:p-10 lg:p-12",
                  reverse ? "md:[&>div:first-child]:order-2" : "",
                ].join(" ")}
              >
                {/* Hover glow effect */}
                <div 
                  aria-hidden="true" 
                  className={`pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    idx === 0 ? "bg-gradient-to-r from-primary/20 via-transparent to-transparent" :
                    idx === 1 ? "bg-gradient-to-l from-blue-500/20 via-transparent to-transparent" :
                    "bg-gradient-to-r from-primary/20 via-transparent to-transparent"
                  }`}
                />

                {/* Image */}
                <div className="relative md:col-span-5">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/30 transition-transform duration-500 group-hover:scale-[1.02] sm:rounded-2xl sm:shadow-2xl">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.imageUrl}
                        alt=""
                        fill
                        className="object-cover object-[50%_22%] transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 768px) 40vw, 100vw"
                      />
                      {/* Gradient overlay */}
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-neutral-ink/60 via-transparent to-transparent" />
                    </div>
                  </div>
                  {/* Decorative ring - hidden on mobile */}
                  <div 
                    aria-hidden="true" 
                    className={`absolute -z-10 hidden h-full w-full rounded-2xl border border-primary/30 sm:block ${
                      reverse ? "-right-3 -top-3" : "-left-3 -top-3"
                    }`} 
                  />
                </div>

                {/* Content */}
                <div className="relative md:col-span-7">
                  {/* Number indicator */}
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-black text-primary sm:mb-4 sm:h-10 sm:w-10 sm:text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base md:text-lg lg:text-xl">
                    {item.body}
                  </p>
                  {/* Decorative line */}
                  <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/0 sm:mt-6 sm:w-16" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

