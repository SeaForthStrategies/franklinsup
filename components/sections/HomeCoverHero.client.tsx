"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface HomeCoverHeroProps {
  donateUrl: string;
  endorsementsHref?: string;
  slideIntervalMs?: number;
}

const SLIDE_IMAGES = [
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/278713777_412912790646020_6541730799857440752_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/331971204_1409405213167257_2791524536371692402_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/334951701_160180913515747_5557203737502548974_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/347799573_644190660379563_4869575071748284670_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/mw2.png",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/317464755_563798532224111_8469478923551943656_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/331991699_977728099877968_6602021448170566335_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/332372182_679100264013987_3128213844501885525_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/334557228_227712166359342_4103396387846074480_n.jpg",
  "https://franklinforsupervisor.com/wp-content/uploads/2025/03/sc2.png",
] as const;

const WHITE_LOGO_URL =
  "https://franklinforsupervisor.com/wp-content/uploads/2025/02/Supervisor_Logo_noBG_v2EL_White-1024x446.png";

export function HomeCoverHero({
  donateUrl,
  endorsementsHref = "/endorsements",
  slideIntervalMs = 8000,
}: HomeCoverHeroProps) {
  const slides = useMemo(() => [...SLIDE_IMAGES], []);
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
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, slideIntervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, slideIntervalMs, slides.length]);

  return (
    <section
      aria-labelledby="home-cover-title"
      className="relative isolate overflow-hidden min-h-[720px] sm:min-h-[780px] lg:min-h-[820px]"
    >
      {/* Full-bleed slideshow background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {slides.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={idx === 0}
            className={[
              // Move the focal point up (show faces), and add subtle Ken Burns motion.
              "object-cover object-[50%_20%] transform-gpu will-change-transform transition-opacity duration-1000",
              idx === active ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={
              !reduceMotion && idx === active
                ? { animation: "heroKenBurns 16s ease-out both" }
                : undefined
            }
            sizes="100vw"
          />
        ))}

        {/* Contrast + brand wash overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: "linear-gradient(135deg, rgb(17,0,52) 0%, rgb(0,234,255) 100%)",
            mixBlendMode: "soft-light",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-neutral-base/90" />
      </div>

      {/* Centered hero overlay (as before) */}
      <div className="site-container relative flex min-h-[720px] items-center py-16 sm:min-h-[780px] sm:py-20 lg:min-h-[820px]">
        <div className="mx-auto w-full max-w-sm text-center sm:max-w-md">
          <div
            className={[
              // Intentionally compact “badge” so more photo shows
              "mx-auto inline-flex flex-col items-center gap-6 rounded-3xl",
              "border border-white/18 bg-white/8 px-4 py-6 shadow-2xl backdrop-blur-xl",
              "sm:px-6 sm:py-7",
            ].join(" ")}
            style={!reduceMotion ? { animation: "fadeInUp 900ms ease-out both" } : undefined}
          >
            <div className="w-[140px] sm:w-[180px]">
              <Image
                src={WHITE_LOGO_URL}
                alt="John Franklin for Supervisor"
                width={680}
                height={296}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="grid gap-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-white/85">
                San Diego County Supervisor • District 5
              </p>
              <h1
                id="home-cover-title"
                className="text-2xl font-black uppercase tracking-tight text-white drop-shadow-[0_18px_60px_rgba(0,0,0,0.75)] sm:text-3xl"
              >
                A Safer, Cleaner
                <br />
                North County
              </h1>
              <p className="mx-auto max-w-[22rem] text-sm text-white/90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
                Proven local leadership. Focused on safety, accountability, and real results for
                families across North County.
              </p>
            </div>

            <div className="mt-1 flex w-full flex-col items-stretch justify-center gap-2 sm:w-auto sm:flex-row">
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex items-center justify-center rounded-full px-7 py-2.5",
                  "text-xs font-black uppercase tracking-wide",
                  "bg-white text-primary shadow-card transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/30",
                ].join(" ")}
              >
                Donate
              </a>

              <Link
                href={endorsementsHref}
                className={[
                  "inline-flex items-center justify-center rounded-full px-7 py-2.5",
                  "text-xs font-black uppercase tracking-wide",
                  "border-2 border-white/80 text-white transition-all duration-200",
                  "hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/30",
                ].join(" ")}
              >
                Endorsements
              </Link>
            </div>

            {/* On-page anchors */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Featured", href: "#featured" },
                { label: "Priorities", href: "#priorities" },
                { label: "Get involved", href: "#get-involved" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-4 py-2",
                    "text-[11px] font-black uppercase tracking-widest text-white/90",
                    "border border-white/30 bg-white/10 backdrop-blur transition-all duration-200",
                    "hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/30",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

