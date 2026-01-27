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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, slideIntervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, slideIntervalMs, slides.length]);

  return { slides, active, reduceMotion };
}

