"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { COVER_HERO_WHITE_LOGO_URL, COVER_HERO_SLIDE_IMAGES } from "@/components/sections/home-hero/coverHeroAssets";

interface HomeCoverHeroProps {
  donateUrl: string;
  endorsementsHref?: string;
}

export function HomeCoverHero({
  donateUrl,
  endorsementsHref = "/endorsements",
}: HomeCoverHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % COVER_HERO_SLIDE_IMAGES.length);
    }, 5000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      aria-labelledby="home-cover-title"
      className="relative isolate min-h-[70svh] sm:min-h-[80svh] lg:min-h-[90svh] overflow-hidden bg-neutral-ink"
    >
      {/* Fullscreen Background Slideshow */}
      <div className="absolute inset-0">
        {COVER_HERO_SLIDE_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-ink/90 via-neutral-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-ink via-transparent to-neutral-ink/30" />
        {/* Subtle animated grain texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Animated accent shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-float-1 absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="hero-float-2 absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-[80px]" />
        <div className="hero-float-3 absolute left-1/3 top-10 h-64 w-64 rounded-full bg-primary/10 blur-[60px]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-4 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left: Text Content */}
            <div className={`mx-auto max-w-2xl text-center sm:mx-0 sm:text-left transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {/* Logo */}
              <div className="mx-auto mb-4 w-[240px] sm:mx-0 sm:mb-8 sm:w-[280px] md:w-[320px] lg:w-[400px] xl:w-[480px]" style={{ transitionDelay: "100ms" }}>
                <Image
                  src={COVER_HERO_WHITE_LOGO_URL}
                  alt="Franklin for Supervisor"
                  width={680}
                  height={296}
                  priority
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>

              {/* Badge - hidden on mobile */}
              <div 
                className={`mb-4 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:inline-flex sm:px-4 sm:py-2 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 sm:text-xs sm:tracking-widest">
                  San Diego County Supervisor • District 5
                </span>
              </div>

              {/* Main headline */}
              <h1
                id="home-cover-title"
                className={`mb-3 text-3xl font-black uppercase tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "300ms" }}
              >
                A Safer, <span className="whitespace-nowrap">More Affordable</span>
                <span className="relative mt-1 block sm:mt-2">
                  <span 
                    className={`animate-pulse-subtle relative z-10 inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(96,165,250,0.5)] transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    North County.
                  </span>
                  {/* Glow effect behind North County */}
                  <span className="absolute -inset-x-4 -inset-y-2 -z-10 bg-blue-400/30 blur-2xl" />
                </span>
              </h1>

              {/* Description */}
              <p 
                className={`mx-auto mb-5 max-w-lg text-base leading-relaxed text-white/80 sm:mx-0 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "400ms" }}
              >
                Experienced leadership fighting for affordability, public safety, fire prevention, and fixing our roads.
              </p>

              {/* CTAs */}
              <div 
                className={`flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-start sm:gap-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "500ms" }}
              >
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-neutral-ink sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-10 md:text-lg"
                >
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    Donate
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
                <Link
                  href={endorsementsHref}
                  className="group inline-flex w-full items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-ink sm:w-auto sm:px-8 sm:py-4 sm:text-base md:text-lg"
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    Endorsements
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Featured Image */}
            <div 
              className={`relative hidden lg:block transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative">
                {/* Main image container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
                  <Image
                    src="https://franklinforsupervisor.com/wp-content/uploads/2023/07/DG5_0595-scaled.jpg"
                    alt="Franklin - Candidate for San Diego County Supervisor"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-ink/80 to-transparent" />
                </div>
                
                {/* Floating accent decoration */}
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 sm:bottom-8 sm:right-8 sm:gap-2">
          {COVER_HERO_SLIDE_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

