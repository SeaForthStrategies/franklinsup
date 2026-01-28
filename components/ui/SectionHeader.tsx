interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  titleId?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  titleId,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header className={[isCenter ? "text-center" : "", className].join(" ")}>
      {eyebrow ? (
        <div
          className={[
            "inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-slate/80",
            isCenter ? "mx-auto" : "",
          ].join(" ")}
        >
          <span
            className="h-3 w-3 rounded bg-gradient-to-br from-primary to-secondary shadow-sm"
            aria-hidden="true"
          />
          {eyebrow}
        </div>
      ) : null}

      <h2
        id={titleId}
        className={[
          "mt-3 text-balance text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl md:text-5xl",
        ].join(" ")}
      >
        {title}
      </h2>

      {lead ? (
        <p className={[isCenter ? "mx-auto" : "", "mt-4 max-w-2xl text-base text-neutral-muted sm:text-lg"].join(" ")}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}

