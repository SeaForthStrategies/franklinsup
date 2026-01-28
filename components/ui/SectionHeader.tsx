import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
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
            "inline-flex items-center text-xs font-black uppercase tracking-widest text-neutral-slate/80",
            isCenter ? "mx-auto" : "",
          ].join(" ")}
        >
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

