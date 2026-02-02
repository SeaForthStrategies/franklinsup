import Image from "next/image";

interface HomeQuoteSectionProps {
  imageUrl: string;
  quote: string;
  byline?: string;
}

export function HomeQuoteSection({
  imageUrl,
  quote,
  byline = "I",
}: HomeQuoteSectionProps) {
  return (
    <section aria-label="Life of service" className="relative overflow-hidden bg-primary-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover object-[50%_22%]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-primary-900/90" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <figure className="mx-auto max-w-4xl text-center text-white">
          <blockquote className="text-balance text-xl font-black uppercase tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            "{quote}"
          </blockquote>
          <figcaption className="mt-4 text-[10px] font-black uppercase tracking-widest text-white/80 sm:mt-6 sm:text-xs">{byline}</figcaption>
        </figure>
      </div>
    </section>
  );
}

