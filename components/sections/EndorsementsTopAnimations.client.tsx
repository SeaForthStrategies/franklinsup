"use client";

import Image from "next/image";
import * as React from "react";

import type { Endorsement } from "@/components/sections/EndorsementsGrid";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function OdometerNumber({ value }: { value: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const safeTarget = Math.max(0, Math.floor(value));

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(safeTarget);
      return;
    }

    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    setDisplayValue(0);
    const durationMs = 1200;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(safeTarget * eased));
      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [isVisible, prefersReducedMotion, safeTarget]);

  return (
    <div
      ref={containerRef}
      className="flex items-end justify-center text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
      aria-label={`${displayValue} endorsements`}
    >
      <span className="tabular-nums">{displayValue}</span>
    </div>
  );
}

type HeadshotItem = { id: string; name: string; imageUrl: string };

const HEADSHOT_SIZE = 96;
const IMG_CLASS = "h-20 w-20 object-cover sm:h-24 sm:w-24";

/** Two-slot rotator: only the hidden slot's image is updated so the visible image never changes src mid-transition (avoids glitches). */
function HeadshotRotator({ endorsements }: { endorsements: Endorsement[] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const items: HeadshotItem[] = React.useMemo(
    () =>
      endorsements
        .filter((e) => Boolean(e.imageUrl))
        .map((e) => ({ id: e.id, name: e.name, imageUrl: e.imageUrl })),
    [endorsements],
  );

  const safeCount = items.length;
  const safeIndex = React.useCallback(
    (i: number) => (safeCount ? ((i % safeCount) + safeCount) % safeCount : 0),
    [safeCount],
  );

  // Double-buffer: two slots; we only update the slot that is hidden to avoid visible src changes.
  const [leadSlot, setLeadSlot] = React.useState<0 | 1>(0); // which slot is on top (visible)
  const [slot0Index, setSlot0Index] = React.useState(0);
  const [slot1Index, setSlot1Index] = React.useState(1);

  const slot0IndexRef = React.useRef(slot0Index);
  const slot1IndexRef = React.useRef(slot1Index);
  React.useEffect(() => {
    slot0IndexRef.current = slot0Index;
    slot1IndexRef.current = slot1Index;
  }, [slot0Index, slot1Index]);

  const item0 = items[slot0Index];
  const item1 = items[slot1Index];

  // Advance: every holdMs, toggle which slot is on top (crossfade).
  React.useEffect(() => {
    if (prefersReducedMotion) return;
    if (safeCount < 2) return;

    const holdMs = 1100;
    const holdT = window.setTimeout(() => {
      setLeadSlot((prev) => (prev === 0 ? 1 : 0));
    }, holdMs);

    return () => window.clearTimeout(holdT);
  }, [leadSlot, prefersReducedMotion, safeCount]);

  // After leadSlot changes, update the hidden slot after the crossfade (use refs so we only depend on leadSlot).
  React.useEffect(() => {
    if (safeCount < 2) return;

    const fadeMs = 200;
    const t = window.setTimeout(() => {
      if (leadSlot === 1) {
        const nextIdx = safeIndex(slot1IndexRef.current + 1);
        setSlot0Index(nextIdx); // slot 0 was hidden; show next there
      } else {
        const nextIdx = safeIndex(slot0IndexRef.current + 1);
        setSlot1Index(nextIdx); // slot 1 was hidden; show next there
      }
    }, fadeMs);

    return () => window.clearTimeout(t);
  }, [leadSlot, safeCount, safeIndex]);

  if (safeCount === 0) {
    return (
      <div className="flex items-center justify-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white/5 sm:h-24 sm:w-24" />
      </div>
    );
  }

  if (safeCount === 1 && item0) {
    return (
      <div className="flex items-center justify-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,.22)] ring-1 ring-white/20 sm:h-24 sm:w-24">
          <Image
            src={item0.imageUrl}
            alt={item0.name}
            width={HEADSHOT_SIZE}
            height={HEADSHOT_SIZE}
            sizes="96px"
            className={IMG_CLASS}
            priority
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(80px_60px_at_30%_20%,rgba(255,255,255,.14),transparent_60%)]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,.22)] ring-1 ring-white/20 sm:h-24 sm:w-24">
        {/* Slot 0: only its src updates when this slot is hidden (no visible glitch) */}
        <div
          className="absolute inset-0 transition-opacity duration-200 ease-out"
          style={{ opacity: leadSlot === 0 ? 1 : 0 }}
          aria-hidden={leadSlot !== 0}
        >
          {item0 ? (
            <Image
              key={`slot0-${slot0Index}`}
              src={item0.imageUrl}
              alt={item0.name}
              width={HEADSHOT_SIZE}
              height={HEADSHOT_SIZE}
              sizes="96px"
              className={IMG_CLASS}
              priority={slot0Index === 0}
            />
          ) : null}
        </div>
        {/* Slot 1 */}
        <div
          className="absolute inset-0 transition-opacity duration-200 ease-out"
          style={{ opacity: leadSlot === 1 ? 1 : 0 }}
          aria-hidden={leadSlot !== 1}
        >
          {item1 ? (
            <Image
              key={`slot1-${slot1Index}`}
              src={item1.imageUrl}
              alt={item1.name}
              width={HEADSHOT_SIZE}
              height={HEADSHOT_SIZE}
              sizes="96px"
              className={IMG_CLASS}
              priority={slot1Index === 0}
            />
          ) : null}
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(80px_60px_at_30%_20%,rgba(255,255,255,.14),transparent_60%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  );
}

export function EndorsementsTopAnimations({
  people,
  organizations,
}: {
  people: Endorsement[];
  organizations: Endorsement[];
}) {
  const all = React.useMemo(() => [...people, ...organizations], [people, organizations]);
  const total = all.length;

  return (
    <div className="mx-auto mt-6 grid w-full max-w-5xl grid-cols-1 gap-3 px-4 text-center sm:mt-8 sm:gap-4 sm:px-6 md:mt-10 md:grid-cols-2 md:gap-5 lg:px-8">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_1px_0_rgba(255,255,255,.08)] backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6">
        <div className="text-base font-black uppercase tracking-tight text-white sm:text-lg">Endorsements for my campaign</div>
        <div className="mt-3 sm:mt-4">
          <OdometerNumber value={total} />
        </div>
        <p className="mx-auto mt-2 max-w-sm text-xs text-white/75 sm:mt-3 sm:text-sm">Support from leaders, neighbors, and organizations across our county.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_1px_0_rgba(255,255,255,.08)] backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6">
        <div className="text-base font-black uppercase tracking-tight text-white sm:text-lg">Meet my endorsers</div>
        <div className="mt-3 flex items-center justify-center sm:mt-4">
          <HeadshotRotator endorsements={all} />
        </div>
        <p className="mx-auto mt-2 max-w-sm text-xs text-white/75 sm:mt-3 sm:text-sm">A quick look at the people backing my campaign.</p>
      </div>
    </div>
  );
}

