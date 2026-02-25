"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { COVER_HERO_WHITE_LOGO_URL } from "@/components/sections/home-hero/coverHeroAssets";
import { GRAIN_TEXTURE_BASE64 } from "@/components/sections/home-hero/coverHeroConstants";

const HERO_VIDEO_ID = "tc8NQdFXbEM";

type YTPlayerInstance = { mute: () => void; unMute: () => void; getPlayerState: () => number };

interface HomeCoverHeroProps {
  donateUrl: string;
  endorsementsHref?: string;
}

export function HomeCoverHero({
  donateUrl,
  endorsementsHref = "/endorsements",
}: HomeCoverHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<YTPlayerInstance | null>(null);

  useEffect(() => {
    const win = typeof window !== "undefined" ? (window as unknown as { YT?: { Player: new (id: string, config: unknown) => YTPlayerInstance } }) : null;
    const initPlayer = () => {
      if (!win?.YT?.Player) return;
      const el = document.getElementById("hero-yt-player");
      if (!el || playerRef.current) return;
      playerRef.current = new win.YT!.Player("hero-yt-player", {
        width: "100%",
        height: "100%",
        videoId: HERO_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: HERO_VIDEO_ID,
          controls: 0,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {},
      });
    };

    if (win?.YT?.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(tag, firstScript);

    (window as unknown as { onYouTubeIframeAPIReady: () => void }).onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      delete (window as unknown as { onYouTubeIframeAPIReady?: () => void }).onYouTubeIframeAPIReady;
    };
  }, []);

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p?.getPlayerState) return;
    if (isMuted) {
      p.unMute();
      setIsMuted(false);
    } else {
      p.mute();
      setIsMuted(true);
    }
  };

  return (
    <section
      aria-labelledby="home-cover-title"
      className="relative isolate w-full overflow-hidden bg-neutral-ink aspect-video"
    >
      {/* 1920×1080 (1080p) video background — autoplay muted; unmute via button */}
      <div className="absolute inset-0" aria-hidden>
        <div
          id="hero-yt-player"
          className="absolute inset-0 h-full w-full [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full"
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

      {/* Content — centered vertically; fixed-height scroll area so all content is visible and layout is stable */}
      <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex min-h-0 min-w-0 items-center justify-start">
            <div className="relative z-10 max-w-2xl text-left">
              {/* Scroll area = hero height on all sizes so content never overflows and layout doesn't shift */}
              <div className="max-h-[56.25vw] overflow-y-auto overscroll-contain py-0.5">
                {/* Logo — consistent spacing below */}
                <div className="mb-4 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[440px]">
                <Image
                  src={COVER_HERO_WHITE_LOGO_URL}
                  alt="Franklin for Supervisor"
                  width={680}
                  height={296}
                  priority
                  className="h-auto w-full drop-shadow-2xl"
                />
                </div>

                {/* Badge — width fits content only; consistent spacing */}
                <div className="mb-4 w-fit max-w-full flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 sm:text-xs sm:tracking-widest">
                    San Diego County Supervisor • District 5
                  </span>
                </div>

                {/* Main headline — allow wrap on small screens */}
                <h1
                  id="home-cover-title"
                  className="mb-4 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  A Safer, More Affordable
                  <span className="relative block sm:whitespace-nowrap">
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
                      North County.
                    </span>
                    <span className="absolute -inset-x-4 -inset-y-2 -z-10 bg-blue-400/30 blur-2xl motion-reduce:hidden" />
                  </span>
                </h1>

                {/* Description — consistent spacing */}
                <p className="mb-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:text-xl">
                  Experienced leadership fighting for affordability, public safety, fire prevention, and fixing our roads.
                </p>

                {/* CTAs — consistent spacing */}
                <div className="flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4">
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

      {/* Volume toggle — bottom right; video autoplays muted, click to unmute */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M11.536 4.464a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </section>
  );
}
