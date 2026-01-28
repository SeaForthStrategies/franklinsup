"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";

interface PriorityCardBase {
  id: string;
  title: string;
}

interface PriorityCardText extends PriorityCardBase {
  type: "text";
  lead: string;
  bullets: string[];
  body: string[];
}

interface PriorityCardImage extends PriorityCardBase {
  type: "image";
  imageUrl: string;
  imageAlt: string;
}

type PriorityCard = PriorityCardText | PriorityCardImage;

interface PrioritiesSectionProps {
  title?: string;
  subtitle?: string;
  cards: PriorityCard[];
  borderless?: boolean;
}

export function PrioritiesSection({
  title = "Solutions That Put Families First",
  subtitle = "Clear commitments on affordability, homelessness, public safety, fire prevention, and fixing our roads.",
  cards,
  borderless = false,
}: PrioritiesSectionProps) {
  const sectionId = useId();
  const fallbackId = cards[0]?.id ?? "";
  const [activeId, setActiveId] = useState<string>(() => fallbackId);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const resolvedActiveId = useMemo(
    () => (cards.some((c) => c.id === activeId) ? activeId : fallbackId),
    [activeId, cards, fallbackId],
  );

  const activeCard = useMemo(() => cards.find((c) => c.id === resolvedActiveId) ?? cards[0], [cards, resolvedActiveId]);
  const activeIndex = useMemo(() => cards.findIndex((c) => c.id === resolvedActiveId), [cards, resolvedActiveId]);
  const mobileSelectId = `priority-${sectionId}-select`;
  const activeTabId = activeCard ? `priority-${sectionId}-${activeCard.id}-tab` : undefined;

  useEffect(() => {
    const selectFromHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      const decoded = raw ? decodeURIComponent(raw) : "";
      if (!decoded) return;
      if (!cards.some((c) => c.id === decoded)) return;

      setActiveId(decoded);

      // Ensure the selected priority is actually visible (sticky header friendly).
      window.requestAnimationFrame(() => {
        panelRef.current?.scrollIntoView({ block: "start" });
      });
    };

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, [cards]);

  return (
    <section aria-labelledby="priorities-title" className="relative overflow-hidden py-16 sm:py-20">
      {/* Soft gradient background blending from news section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-base via-neutral-base to-neutral-surface" />
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[720px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[-15%] h-[420px] w-[720px] rounded-full bg-blue-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-slate/80">
            <span className="h-3 w-3 rounded bg-gradient-to-br from-primary to-secondary shadow-sm" aria-hidden="true" />
            Priorities
          </div>

          <h2 id="priorities-title" className="mt-3 text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-base text-neutral-muted sm:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
          {/* Left: mobile dropdown + desktop list */}
          <div className={borderless ? "" : "lg:pr-2"}>
            {/* Mobile: dropdown */}
            <div className="lg:hidden">
              <label htmlFor={mobileSelectId} className="block text-xs font-black uppercase tracking-widest text-neutral-slate/80">
                Choose a priority
              </label>
              <div className="mt-2">
                <select
                  id={mobileSelectId}
                  value={resolvedActiveId}
                  onChange={(e) => setActiveId(e.target.value)}
                  className={[
                    "w-full rounded-2xl bg-neutral-surface px-4 py-3 font-black uppercase tracking-tight text-neutral-ink shadow-sm",
                    borderless ? "" : "border border-neutral-border",
                    "focus-visible:ring-2 focus-visible:ring-secondary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-base",
                  ].join(" ")}
                >
                  {cards.map((card) => (
                    <option key={card.id} value={card.id}>
                      {card.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Desktop: clickable list */}
            <div
              role="tablist"
              aria-label="Priority list"
              className={[
                "hidden lg:grid lg:gap-3",
                "lg:sticky lg:top-24 lg:self-start",
              ].join(" ")}
            >
              {cards.map((card) => {
                const tabId = `priority-${sectionId}-${card.id}-tab`;
                const panelId = `priority-${sectionId}-panel`;
                const isActive = card.id === resolvedActiveId;

                return (
                  <button
                    key={card.id}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(card.id)}
                    className={[
                      "group relative isolate overflow-hidden rounded-2xl text-left outline-none transition",
                      "bg-neutral-surface",
                      borderless ? "" : "border border-neutral-border",
                      "shadow-sm hover:shadow-md",
                      "h-[72px]",
                      isActive ? "ring-2 ring-secondary-500/25" : "ring-1 ring-transparent",
                      "focus-visible:ring-2 focus-visible:ring-secondary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-base",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-secondary transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                      ].join(" ")}
                    />

                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(520px_190px_at_10%_10%,rgba(59,130,246,.10),transparent_60%)]"
                    />

                    <span className="relative z-10 flex h-full items-center justify-between gap-4 px-4 sm:px-5">
                      <span className="min-w-0 flex-1 font-heading text-base font-black uppercase tracking-tight text-neutral-ink sm:text-lg">
                        <span className="block truncate">{card.title}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={[
                          "inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border shadow-sm transition-colors duration-200",
                          isActive
                            ? "border-transparent bg-secondary-500 text-white"
                            : "border-neutral-border bg-neutral-base text-neutral-ink group-hover:border-secondary-500/25",
                        ].join(" ")}
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l3.5 4.25a.75.75 0 0 1 0 .94l-3.5 4.25a.75.75 0 0 1-1.06.02Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: detail panel */}
          <div
            ref={panelRef}
            role="tabpanel"
            id={`priority-${sectionId}-panel`}
            aria-labelledby={[mobileSelectId, activeTabId].filter(Boolean).join(" ") || undefined}
            className={[
              "relative isolate overflow-hidden rounded-2xl bg-neutral-surface p-6 shadow-card sm:p-8",
              "min-h-[420px]",
              "scroll-mt-24",
              borderless ? "" : "border border-neutral-border",
            ].join(" ")}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-secondary opacity-95"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(720px_240px_at_12%_12%,rgba(59,130,246,.12),transparent_60%)]"
            />

            {activeCard ? (
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-slate/80">
                    <span className="h-3 w-3 rounded bg-gradient-to-br from-primary to-secondary shadow-sm" aria-hidden="true" />
                    Solutions
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-border bg-neutral-base px-3 py-1 text-xs font-black uppercase tracking-widest text-neutral-slate/80">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-secondary-500" />
                    {activeIndex >= 0 ? `Selected ${activeIndex + 1}/${cards.length}` : "Selected"}
                  </div>
                </div>

                <h3 className="mt-3 font-heading text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl">
                  {activeCard.title}
                </h3>

                {activeCard.type === "image" ? (
                  <div className="mt-6">
                    <div
                      className={[
                        "overflow-hidden rounded-xl bg-neutral-base",
                        borderless ? "" : "border border-neutral-border",
                      ].join(" ")}
                    >
                      <Image
                        src={activeCard.imageUrl}
                        alt={activeCard.imageAlt}
                        width={1200}
                        height={750}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-3 text-sm text-neutral-muted">
                      This graphic summarizes my position. Share it, save it, or use it to start the conversation.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 grid gap-5">
                    <p className="text-base text-neutral-muted sm:text-lg">
                      {activeCard.lead}
                    </p>

                    <div>
                        <div className="text-xs font-black uppercase tracking-widest text-neutral-slate/80">Key commitments</div>
                      <ul role="list" className="mt-3 grid gap-2 sm:grid-cols-2">
                        {activeCard.bullets.map((b) => (
                          <li
                            key={b}
                            className="grid grid-cols-[16px_1fr] items-start gap-3 text-sm font-black leading-relaxed text-neutral-ink sm:text-[15px]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1 h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-primary to-secondary shadow-sm"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid gap-4 border-t border-neutral-border pt-5">
                      {activeCard.body.map((p, idx) => (
                        <p key={idx} className="text-sm leading-relaxed text-neutral-muted sm:text-base">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative z-10 text-neutral-muted">No priorities available.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

