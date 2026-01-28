"use client";

import { useEffect, useMemo, useState } from "react";

import { COVER_HERO_SLIDE_IMAGES } from "./coverHeroAssets";

interface UseCoverHeroSlideshowOptions {
  slides?: readonly string[];
  slideIntervalMs?: number;
}

export function useCoverHeroSlideshow(options: UseCoverHeroSlideshowOptions = {}) {
  const { slides: slideOverrides, slideIntervalMs = 8000 } = options;
  const slides = useMemo(() => [...(slideOverrides ?? COVER_HERO_SLIDE_IMAGES)], [slideOverrides]);

  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isBelowDesktop, setIsBelowDesktop] = useState(() => {
    // Tailwind `lg` starts at 1024px; we only rotate slides below that.
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1023.98px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023.98px)");
    const onChange = (e: MediaQueryListEvent) => {
      setIsBelowDesktop(e.matches);
      // Keep desktop stable (first slide) for consistent rendering.
      if (!e.matches) setActive(0);
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (!isBelowDesktop) return;
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, slideIntervalMs);
    return () => window.clearInterval(id);
  }, [isBelowDesktop, reduceMotion, slideIntervalMs, slides.length]);

  return { slides, active, reduceMotion };
}

