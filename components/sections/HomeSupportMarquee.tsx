interface HomeSupportMarqueeProps {
  text?: string;
}

export function HomeSupportMarquee({ text = "Support my campaign" }: HomeSupportMarqueeProps) {
  // Two tracks to create a seamless marquee.
  const items = Array.from({ length: 12 }, () => text);

  return (
    <section aria-label="Support marquee" className="relative overflow-hidden bg-primary-900 py-6 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
      </div>

      <div className="relative">
        <div className="flex gap-10 whitespace-nowrap will-change-transform animate-[ffsvMarquee_22s_linear_infinite]">
          {items.map((label, idx) => (
            <span key={`a-${idx}`} className="text-xl font-black uppercase tracking-widest text-white/95">
              {label} <span className="px-2 text-white/60">*</span>
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="mt-2 flex gap-10 whitespace-nowrap will-change-transform animate-[ffsvMarquee_22s_linear_infinite] [animation-delay:-11s]"
        >
          {items.map((label, idx) => (
            <span key={`b-${idx}`} className="text-xl font-black uppercase tracking-widest text-white/95">
              {label} <span className="px-2 text-white/60">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

