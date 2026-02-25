"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { COVER_HERO_WHITE_LOGO_URL } from "@/components/sections/home-hero/coverHeroAssets";
import { GRAIN_TEXTURE_BASE64 } from "@/components/sections/home-hero/coverHeroConstants";

const HERO_VIDEO_ID = "tc8NQdFXbEM";

interface HomeCoverHeroProps {
  donateUrl: string;
  endorsementsHref?: string;
}

export function HomeCoverHero({
  donateUrl,
  endorsementsHref = "/endorsements",
}: HomeCoverHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // specific delay to ensure initial render paint before animation triggers
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-labelledby="home-cover-title"
      className="relative isolate w-full overflow-hidden bg-neutral-ink aspect-video"
    >
      {/* 1920×1080 (1080p) video background, autoplay (unmuted; may not autoplay on all browsers) */}
      <div className="absolute inset-0" aria-hidden>
        <iframe
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=0&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&playsinline=1&rel=0&modestbranding=1`}
          title="Campaign video background"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-ink/90 via-neutral-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-ink via-transparent to-neutral-ink/30" />
        {/* Subtle animated grain texture */}
        <div className={`absolute inset-0 opacity-[0.03] mix-blend-overlay`} style={{ backgroundImage: `url('${GRAIN_TEXTURE_BASE64}')` }} />
      </div>

      {/* Animated accent shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
        <div className="hero-float-1 absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="hero-float-2 absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-[80px]" />
        <div className="hero-float-3 absolute left-1/3 top-10 h-64 w-64 rounded-full bg-primary/10 blur-[60px]" />
      </div>

      {/* Content — centered vertically, uses space well; scrollable on short viewports so all content is visible */}
      <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-4 py-5 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex min-h-0 min-w-0 items-center justify-start">
            <div
              className={`relative z-10 max-w-2xl text-left transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Mobile & tablet: cap height to hero so content scrolls; all content stays visible. Desktop: no cap. */}
              <div className="max-h-[56.25vw] overflow-y-auto overscroll-contain py-1 lg:max-h-none lg:py-0">
                {/* Logo */}
                <div className="mb-3 w-[200px] sm:mb-5 sm:w-[260px] md:mb-6 md:w-[320px] lg:w-[380px] xl:w-[440px]" style={{ transitionDelay: "100ms" }}>
                <Image
                  src={COVER_HERO_WHITE_LOGO_URL}
                  alt="Franklin for Supervisor"
                  width={680}
                  height={296}
                  priority
                  className="h-auto w-full drop-shadow-2xl"
                />
                </div>

                {/* Badge — visible from sm, compact on mobile; width fits content only */}
                <div 
                  className={`mb-3 w-fit max-w-full flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-2 transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 sm:text-xs sm:tracking-widest">
                    San Diego County Supervisor • District 5
                  </span>
                </div>

                {/* Main headline — allow wrap on small screens so it fits */}
                <h1
                  id="home-cover-title"
                  className={`mb-3 text-2xl font-black uppercase tracking-tight text-white sm:mb-5 sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  A Safer, More Affordable
                  <span className="relative block sm:whitespace-nowrap">
                  <span 
                    className={`animate-pulse-subtle relative z-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(96,165,250,0.5)] transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:animate-none ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    North County.
                  </span>
                  {/* Glow effect behind North County */}
                  <span className="absolute -inset-x-4 -inset-y-2 -z-10 bg-blue-400/30 blur-2xl motion-reduce:hidden" />
                </span>
                </h1>

                {/* Description */}
                <p 
                  className={`mb-4 max-w-lg text-sm leading-relaxed text-white/80 sm:mb-6 sm:text-base md:text-lg lg:text-xl transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: "400ms" }}
                >
                  Experienced leadership fighting for affordability, public safety, fire prevention, and fixing our roads.
                </p>

                {/* CTAs */}
                <div 
                  className={`flex flex-row flex-wrap items-center justify-start gap-2 sm:gap-4 transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-neutral-ink sm:px-6 sm:py-3.5 sm:text-sm md:px-8 md:py-4 md:text-base motion-reduce:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                      Donate
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5 motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                  <Link
                    href={endorsementsHref}
                    className="group inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-5 py-3 text-xs font-black uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink sm:px-6 sm:py-3.5 sm:text-sm md:px-8 md:py-4 md:text-base"
                  >
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      Endorsements
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5 motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
