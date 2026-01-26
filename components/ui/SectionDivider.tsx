interface SectionDividerProps {
  variant?: "wave1" | "wave2" | "dots";
  className?: string;
}

/**
 * Subtle divider that blends adjacent section backgrounds.
 * (No big SVG waves — just a feathered gradient seam.)
 */
export function SectionDivider({ variant = "wave1", className = "" }: SectionDividerProps) {
  const base = [
    // overlap adjacent sections so this doesn't create a "band"
    "pointer-events-none relative isolate z-10 overflow-hidden",
    "h-12 -mt-8 -mb-8 sm:h-14 sm:-mt-10 sm:-mb-10",
    className,
  ].join(" ");

  if (variant === "dots") {
    return (
      <div aria-hidden="true" data-ffsv-divider="dots" className={base}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/35 to-transparent" />
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
          <span className="h-2 w-2 rounded-full bg-sky-400/55" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400/50" />
        </div>
      </div>
    );
  }

  const seamGradient =
    variant === "wave2"
      ? "from-transparent via-blue-100/35 to-transparent"
      : "from-transparent via-sky-100/35 to-transparent";

  const glow =
    variant === "wave2"
      ? "bg-[radial-gradient(55%_55%_at_50%_50%,rgba(59,130,246,.18),transparent_65%)]"
      : "bg-[radial-gradient(55%_55%_at_50%_50%,rgba(34,211,238,.16),transparent_65%)]";

  return (
    <div aria-hidden="true" data-ffsv-divider={variant} className={base}>
      {/* Feathered blend seam */}
      <div className={`absolute inset-0 bg-gradient-to-b ${seamGradient}`} />
      <div className={`absolute inset-0 ${glow}`} />

      {/* subtle hairline highlight (keeps it crisp, not "muddy") */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </div>
  );
}
