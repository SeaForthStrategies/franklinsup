"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { COVER_HERO_WHITE_LOGO_URL } from "@/components/sections/home-hero/coverHeroAssets";

const HERO_VIDEO_ID = "wqzuN9F11Ow";
const HERO_POSTER_URL = `https://i.ytimg.com/vi/${HERO_VIDEO_ID}/maxresdefault.jpg`;
const HERO_POSTER_FALLBACK = `https://i.ytimg.com/vi/${HERO_VIDEO_ID}/sddefault.jpg`;

type YTPlayerInstance = { mute: () => void; unMute: () => void; getPlayerState: () => number };

interface HomeCoverHeroProps {
  donateUrl: string;
  endorsementsHref?: string;
}

export function HomeCoverHero({
  donateUrl,
  endorsementsHref = "/endorsements",
}: HomeCoverHeroProps) {
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [posterVisible, setPosterVisible] = useState(true);
  const [posterSrc, setPosterSrc] = useState(HERO_POSTER_URL);
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setHeroInView(true);
      },
      { rootMargin: "100px", threshold: 0 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!heroInView) return;

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
        events: {
          onStateChange: (e: { data: number }) => {
            if (e.data === 1) setPosterVisible(false);
          },
        },
      });
    };

    if (win?.YT?.Player) {
      initPlayer();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]'
    );
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const nonce =
        document
          .querySelector<HTMLMetaElement>('meta[name="csp-nonce"]')
          ?.getAttribute("content") ?? "";
      if (nonce) tag.nonce = nonce;
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(tag, firstScript);
    }

    (window as unknown as { onYouTubeIframeAPIReady: () => void }).onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      delete (window as unknown as { onYouTubeIframeAPIReady?: () => void }).onYouTubeIframeAPIReady;
    };
  }, [heroInView]);

  return (
    <section
      ref={sectionRef}
      aria-label="Home hero"
      className="hero-section-scaled relative isolate block w-full overflow-hidden bg-neutral-ink aspect-video"
    >
      {/* Poster image — shows until video is playing for fast LCP */}
      <div
        aria-hidden
        className="absolute inset-0 bg-neutral-ink transition-opacity duration-500"
        style={{
          opacity: posterVisible ? 1 : 0,
          pointerEvents: posterVisible ? "auto" : "none",
        }}
      >
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
          priority
          onError={() => {
            if (posterSrc !== HERO_POSTER_FALLBACK) setPosterSrc(HERO_POSTER_FALLBACK);
          }}
        />
      </div>

      {/* Video background — loads only when hero is in view */}
      <div className="absolute inset-0" aria-hidden>
        <div
          id="hero-yt-player"
          className="pointer-events-none absolute inset-0 h-full w-full touch-none [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:pointer-events-none"
        />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-neutral-ink/60" aria-hidden />

      {/* Mobile hero — compact layout fitted to 16:9 */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-3 py-3 [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] [padding-left:calc(0.75rem+env(safe-area-inset-left))] [padding-right:calc(0.75rem+env(safe-area-inset-right))] sm:px-4 sm:py-4 md:hidden">
        <div className="flex w-full max-w-[220px] flex-col items-center gap-2 text-center">
          <Image
            src={COVER_HERO_WHITE_LOGO_URL}
            alt="Franklin for Supervisor"
            width={280}
            height={122}
            priority
            className="mx-auto h-auto w-full max-w-[130px] drop-shadow-2xl"
          />
          <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/90 whitespace-nowrap">
            San Diego County Supervisor • District 5
          </p>
          <h1
            className="font-heading text-[15px] font-black uppercase leading-[1.05] tracking-tight text-white"
          >
            A Safer, More Affordable{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              North County.
            </span>
          </h1>
          <div className="grid w-full grid-cols-2 gap-1.5">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[34px] items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-2.5 py-1.5 text-center text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-red-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-neutral-ink"
            >
              Donate
            </a>
            <Link
              href={endorsementsHref}
              className="inline-flex min-h-[34px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-2.5 py-1.5 text-center text-[10px] font-black uppercase tracking-wide text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink"
            >
              Endorsements
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop hero — flex + centered inner wrapper so centering works in production and after cache */}
      <div className="hero-desktop-overlay absolute inset-0 z-10 hidden px-6 py-8 md:flex md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="hero-desktop-overlay-inner relative z-10">
          <div className="hero-content-inner">
                <div className="hero-logo mx-auto mb-4">
                  <Image
                    src={COVER_HERO_WHITE_LOGO_URL}
                    alt="Franklin for Supervisor"
                    width={680}
                    height={296}
                    priority
                    className="h-auto w-full drop-shadow-2xl"
                  />
                </div>
                <div className="hero-badge mb-4 mx-auto flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="hero-badge-text font-bold uppercase tracking-wider text-white/90">
                    San Diego County Supervisor • District 5
                  </span>
                </div>
                <h1
                  id="home-cover-title"
                  className="hero-headline mb-4 font-black uppercase tracking-tight text-white"
                >
                  A Safer, More Affordable
                  <span className="relative block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
                      North County.
                    </span>
                    <span className="absolute -inset-x-4 -inset-y-2 -z-10 bg-blue-400/30 blur-2xl motion-reduce:hidden" />
                  </span>
                </h1>
                <p className="hero-description mb-4 max-w-lg leading-relaxed text-white/80 mx-auto">
                  Experienced leadership fighting for affordability, public safety, fire prevention, and fixing our roads.
                </p>
                <div className="hero-cta-row flex flex-row flex-wrap items-center justify-center gap-4">
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-black uppercase tracking-wide text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-neutral-ink motion-reduce:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Donate
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                  <Link
                    href={endorsementsHref}
                    className="hero-cta hero-cta-secondary group inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-black uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink"
                  >
                    <span className="flex items-center gap-2">
                      Endorsements
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
        </div>
      </div>

      {/* Volume toggle removed to keep video audio permanently muted */}
    </section>
  );
}
