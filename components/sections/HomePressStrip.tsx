import Image from "next/image";

const ITEMS = [
  {
    href: "https://www.youtube.com/watch?v=V0LDn67bbis",
    img: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/KUSI-e1769197324992.png",
    alt: "KUSI",
  },
  {
    href: "https://www.sandiegouniontribune.com/2025/09/30/opinion-to-reduce-homelessness-pair-compassion-with-accountability/",
    img: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/SDTB-1024x236.png",
    alt: "San Diego Union-Tribune",
  },
  {
    href: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/1768601284709-5c6e4dec-d9cd-49a6-911b-7057b1e021a8_1.png",
    img: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Subheading-1024x262.png",
    alt: "Franklin for Supervisor",
  },
] as const;

export function HomePressStrip() {
  return (
    <section id="featured" aria-label="In the news" className="relative bg-neutral-base py-10 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_240px_at_50%_-10%,rgba(25,183,255,.18),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/14 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <p className="text-xs font-black uppercase tracking-widest text-neutral-muted">Featured in</p>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0" />
        </div>

        <div className="relative mt-6">
          <div
            className={[
              "flex items-center gap-12 overflow-x-auto py-3",
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
              "snap-x snap-mandatory",
            ].join(" ")}
          >
            {ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.alt}
                className="group inline-flex shrink-0 snap-start items-center justify-center"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={520}
                  height={140}
                  className="h-10 w-auto opacity-70 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 sm:h-12"
                />
              </a>
            ))}
          </div>

          {/* Edge fades so the strip feels intentional (not “boxes”) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-neutral-base to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-neutral-base to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

