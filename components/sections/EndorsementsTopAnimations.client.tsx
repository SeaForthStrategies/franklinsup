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

function OdometerDigit({
  digit,
  animate,
  delayMs,
  reducedMotion,
}: {
  digit: number;
  animate: boolean;
  delayMs: number;
  reducedMotion: boolean;
}) {
  return (
    <span className="relative inline-block h-[1em] w-[0.75em] overflow-hidden align-baseline tabular-nums">
      <span
        className="absolute left-0 top-0 flex flex-col leading-none transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.85,.2,1)]"
        style={{
          transform: animate ? `translateY(-${digit}em)` : "translateY(0em)",
          transitionDelay: reducedMotion ? "0ms" : `${delayMs}ms`,
          transitionDuration: reducedMotion ? "0ms" : undefined,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="h-[1em] leading-none">
            {i}
          </span>
        ))}
      </span>
      <span className="sr-only">{digit}</span>
    </span>
  );
}

function OdometerNumber({ value }: { value: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const t = window.setTimeout(() => setAnimate(true), 220);
    return () => window.clearTimeout(t);
  }, [prefersReducedMotion]);

  const text = Math.max(0, Math.floor(value)).toString();

  return (
    <div
      className="flex items-end justify-center text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
      aria-label={`${text} endorsements`}
    >
      {text.split("").map((ch, idx) => {
        const digit = Number.parseInt(ch, 10);
        if (Number.isNaN(digit)) return null;
        return (
          <OdometerDigit
            key={`${idx}-${ch}`}
            digit={digit}
            animate={prefersReducedMotion ? true : animate}
            delayMs={idx * 95}
            reducedMotion={prefersReducedMotion}
          />
        );
      })}
    </div>
  );
}

type HeadshotItem = { id: string; name: string; imageUrl: string };

function HeadshotRotator({ endorsements }: { endorsements: Endorsement[] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const items: HeadshotItem[] = React.useMemo(
    () =>
      endorsements
        .filter((e) => Boolean(e.imageUrl))
        .map((e) => ({ id: e.id, name: e.name, imageUrl: e.imageUrl })),
    [endorsements],
  );

  const [index, setIndex] = React.useState(0);
  const [showNext, setShowNext] = React.useState(false);
  const [nextReady, setNextReady] = React.useState(true);

  const safeCount = items.length;
  const safeIndex = React.useCallback(
    (i: number) => (safeCount ? ((i % safeCount) + safeCount) % safeCount : 0),
    [safeCount],
  );

  const current = items[safeIndex(index)];
  const next = items[safeIndex(index + 1)];

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    if (!next?.imageUrl) return;

    let cancelled = false;
    setNextReady(false);

    const img = new window.Image();
    img.decoding = "async";
    img.src = next.imageUrl;

    const done = () => {
      if (!cancelled) setNextReady(true);
    };

    if (img.complete) {
      done();
      return;
    }

    img.onload = done;
    img.onerror = done;
    return () => {
      cancelled = true;
    };
  }, [next?.imageUrl, prefersReducedMotion]);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    if (safeCount < 2) return;

    // Slightly faster cadence than before, still not dizzy.
    const holdMs = 1100;
    const fadeMs = 200;
    const bufferMs = 40;

    let swapT: number | undefined;
    let endT: number | undefined;

    const holdT = window.setTimeout(() => {
      if (!nextReady) return;
      setShowNext(true);

      swapT = window.setTimeout(() => {
        setIndex((i) => safeIndex(i + 1));
        endT = window.setTimeout(() => setShowNext(false), bufferMs);
      }, fadeMs);
    }, holdMs);

    return () => {
      window.clearTimeout(holdT);
      if (swapT) window.clearTimeout(swapT);
      if (endT) window.clearTimeout(endT);
    };
  }, [index, nextReady, prefersReducedMotion, safeCount, safeIndex]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,.22)] ring-1 ring-white/20 sm:h-24 sm:w-24">
        {current ? (
          <Image
            src={current.imageUrl}
            alt={current.name}
            width={96}
            height={96}
            sizes="96px"
            className="h-20 w-20 object-cover sm:h-24 sm:w-24"
            priority={index === 0}
          />
        ) : null}

        {!prefersReducedMotion && safeCount > 1 && next ? (
          <div
            className="absolute inset-0 transition-opacity duration-200 ease-out"
            style={{ opacity: showNext && nextReady ? 1 : 0 }}
            aria-hidden="true"
          >
            <Image
              src={next.imageUrl}
              alt={next.name}
              width={96}
              height={96}
              sizes="96px"
              className="h-20 w-20 object-cover sm:h-24 sm:w-24"
            />
          </div>
        ) : null}

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

