"use client";

import Image from "next/image";
import Link from "next/link";

import { COVER_HERO_WHITE_LOGO_URL } from "@/components/sections/home-hero/coverHeroAssets";
import { useCoverHeroSlideshow } from "@/components/sections/home-hero/useCoverHeroSlideshow";

interface HomeCoverHeroProps {
  donateUrl: string;
  endorsementsHref?: string;
  slideIntervalMs?: number;
}

export function HomeCoverHero({
  donateUrl,
  endorsementsHref = "/endorsements",
  slideIntervalMs = 8000,
}: HomeCoverHeroProps) {
  const { slides, active, reduceMotion } = useCoverHeroSlideshow({ slideIntervalMs });

  return (
    <section aria-labelledby="home-cover-title" className="relative isolate overflow-hidden bg-neutral-base">
      {/* Full-bleed slideshow background (all breakpoints) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {slides.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={idx === 0}
            className={[
              "object-cover object-[50%_20%] transform-gpu will-change-transform transition-opacity duration-1000",
              idx === active ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={!reduceMotion && idx === active ? { animation: "heroKenBurns 16s ease-out both" } : undefined}
            sizes="100vw"
          />
        ))}

        {/* Strong contrast overlay (clean; blues/reds/neutrals only) */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-neutral-base/96" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={[
              "mx-auto inline-flex w-full flex-col items-center gap-6 rounded-3xl",
              "border border-white/18 bg-black/35 p-6 shadow-2xl backdrop-blur-xl",
              "sm:p-10",
            ].join(" ")}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-[210px] sm:w-[270px] lg:w-[360px] xl:w-[420px]">
                <Image
                  src={COVER_HERO_WHITE_LOGO_URL}
                  alt="Franklin for Supervisor"
                  width={680}
                  height={296}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <p className="text-[11px] font-black uppercase tracking-widest text-white/85">
                San Diego County Supervisor • District 5
              </p>
            </div>

            <div className="grid gap-4">
              <h1
                id="home-cover-title"
                className="sr-only"
              >
                I’m running for Supervisor
              </h1>
              <p className="mx-auto max-w-2xl text-xl font-extrabold text-white/95 sm:text-2xl">
                A Safer, Cleaner North County.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-cta site-cta--primary sm:w-[190px]"
              >
                Donate
              </a>
              <Link
                href={endorsementsHref}
                className={[
                  "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-white/95",
                  "border border-white/35 bg-transparent transition-all duration-200",
                  "hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/55",
                  "focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/30",
                  "sm:w-[190px]",
                ].join(" ")}
              >
                Endorsements
              </Link>
              <Link
                href="/about"
                className={[
                  "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-white/95",
                  "border border-white/35 bg-transparent transition-all duration-200",
                  "hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/55",
                  "focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/30",
                  "sm:w-[190px]",
                ].join(" ")}
              >
                Meet me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

