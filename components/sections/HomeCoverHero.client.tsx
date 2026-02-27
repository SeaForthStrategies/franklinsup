"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { COVER_HERO_WHITE_LOGO_URL } from "@/components/sections/home-hero/coverHeroAssets";

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
      className="hero-section-scaled relative isolate flex w-full flex-col overflow-hidden bg-neutral-ink aspect-video"
    >
      {/* Video background */}
      <div className="absolute inset-0" aria-hidden>
        <div
          id="hero-yt-player"
          className="absolute inset-0 h-full w-full [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full"
        />
      </div>

      {/* Dark overlay on entire hero */}
      <div className="pointer-events-none absolute inset-0 bg-neutral-ink/40" aria-hidden />

      {/* Content — same layout at all sizes, scales proportionally */}
      <div className="hero-section-content relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-start">
            <div className="relative z-10 w-full max-w-2xl text-left">
              <div className="hero-content-inner pb-6 pt-1 sm:pb-6 sm:pt-0">
                {/* Logo — scales with viewport */}
                <div className="hero-logo mb-[clamp(0.75rem,2vw,1rem)]">
                  <Image
                    src={COVER_HERO_WHITE_LOGO_URL}
                    alt="Franklin for Supervisor"
                    width={680}
                    height={296}
                    priority
                    className="h-auto w-full drop-shadow-2xl"
                  />
                </div>

                {/* Badge — scales proportionally */}
                <div className="hero-badge mb-[clamp(0.75rem,2vw,1rem)] flex w-fit max-w-full items-center gap-[clamp(0.25rem,0.75vw,0.5rem)] rounded-full border border-white/20 bg-white/10 px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.375rem,0.75vw,0.5rem)] backdrop-blur-sm">
                  <span className="hero-badge-dot relative flex shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-green-500" />
                  </span>
                  <span className="hero-badge-text font-bold uppercase tracking-wider text-white/90">
                    San Diego County Supervisor • District 5
                  </span>
                </div>

                {/* Main headline */}
                <h1
                  id="home-cover-title"
                  className="hero-headline mb-[clamp(0.75rem,2vw,1rem)] font-black uppercase tracking-tight text-white"
                >
                  A Safer, More Affordable
                  <span className="relative block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
                      North County.
                    </span>
                    <span className="absolute -inset-x-4 -inset-y-2 -z-10 bg-blue-400/30 blur-2xl motion-reduce:hidden" />
                  </span>
                </h1>

                {/* Description */}
                <p className="hero-description mb-[clamp(0.75rem,2vw,1rem)] max-w-lg leading-relaxed text-white/80">
                  Experienced leadership fighting for affordability, public safety, fire prevention, and fixing our roads.
                </p>

                {/* CTAs */}
                <div className="hero-cta-row flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4">
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-black uppercase tracking-wide text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-neutral-ink motion-reduce:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                      Donate
                      <svg className="hero-cta-icon h-[clamp(1rem,1.25vw,1.25rem)] w-[clamp(1rem,1.25vw,1.25rem)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                  <Link
                    href={endorsementsHref}
                    className="hero-cta hero-cta-secondary group inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-black uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink"
                  >
                    <span className="flex items-center gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                      Endorsements
                      <svg className="hero-cta-icon h-[clamp(1rem,1.25vw,1.25rem)] w-[clamp(1rem,1.25vw,1.25rem)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        className="hero-volume-btn absolute bottom-[clamp(1rem,2.5vw,1.5rem)] right-[clamp(1rem,2.5vw,1.5rem)] z-20 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink"
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
