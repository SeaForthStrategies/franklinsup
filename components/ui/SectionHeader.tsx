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
            "inline-flex items-center text-[10px] font-black uppercase tracking-widest text-neutral-slate/80 sm:text-xs",
            isCenter ? "mx-auto" : "",
          ].join(" ")}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        id={titleId}
        className={[
          "mt-2 text-balance text-xl font-black uppercase tracking-tight text-primary sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
        ].join(" ")}
      >
        {title}
      </h2>

      {lead ? (
        <p className={[isCenter ? "mx-auto" : "", "mt-3 max-w-2xl text-sm text-neutral-muted sm:mt-4 sm:text-base md:text-lg"].join(" ")}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}

