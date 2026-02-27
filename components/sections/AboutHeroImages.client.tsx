"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_IMAGES = [
  "https://franklinforsupervisor.com/wp-content/uploads/2024/08/JohnShanna1EL.png",
  "https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0419-Copy-1024x683.jpg",
  "/mayor-franklin-carlsbad-event.png",
] as const;

interface AboutHeroImagesProps {
  images?: readonly string[];
  slideIntervalMs?: number;
}

export function AboutHeroImages({ images = DEFAULT_IMAGES, slideIntervalMs = 8000 }: AboutHeroImagesProps) {
  const slides = useMemo(() => [...images], [images]);

  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const [isBelowDesktop, setIsBelowDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    // Tailwind `lg` starts at 1024px; we rotate only below that.
    return window.matchMedia("(max-width: 1023.98px)").matches;
  });

  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023.98px)");
    const onChange = (e: MediaQueryListEvent) => {
      setIsBelowDesktop(e.matches);
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

  const shouldRotate = isBelowDesktop && !reduceMotion && slides.length > 1;

  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-3 px-4 sm:mt-10 sm:gap-4 sm:px-6 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:px-8">
      <figure className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/25 shadow-2xl backdrop-blur-sm sm:rounded-3xl">
        <div className="relative aspect-[16/12] bg-neutral-ink">
          {shouldRotate ? (
            slides.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={[
                  "object-cover object-[50%_30%] sm:object-[50%_25%]",
                  "transition-opacity duration-1000",
                  idx === (active + 0) % slides.length ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))
          ) : (
            <Image
              src={slides[0] ?? DEFAULT_IMAGES[0]}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[50%_30%] sm:object-[50%_25%]"
            />
          )}
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
        </div>
      </figure>

      <figure className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/25 shadow-2xl backdrop-blur-sm sm:rounded-3xl">
        <div className="relative aspect-[16/12] bg-neutral-ink">
          {shouldRotate ? (
            slides.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={[
                  "object-cover object-[50%_30%] sm:object-[50%_25%]",
                  "transition-opacity duration-1000",
                  idx === (active + 1) % slides.length ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))
          ) : (
            <Image
              src={slides[1] ?? DEFAULT_IMAGES[1]}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[50%_30%] sm:object-[50%_25%]"
            />
          )}
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
        </div>
      </figure>

      <figure className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/25 shadow-2xl backdrop-blur-sm sm:rounded-3xl">
        <div className="relative aspect-[16/12] bg-neutral-ink">
          {shouldRotate ? (
            slides.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={[
                  "object-cover object-[50%_28%] sm:object-[50%_24%]",
                  "transition-opacity duration-1000",
                  idx === (active + 2) % slides.length ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))
          ) : (
            <Image
              src={slides[2] ?? DEFAULT_IMAGES[2]}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-[50%_28%] sm:object-[50%_24%]"
            />
          )}
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
        </div>
      </figure>
    </div>
  );
}

