"use client";

import { useState } from "react";
import Image from "next/image";

interface IssuesVideoCardProps {
  title: string;
  videoId: string;
  start?: number;
  borderless?: boolean;
}

export function IssuesVideoCard({ title, videoId, start, borderless = false }: IssuesVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const qs = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    playsinline: "1",
  });
  if (typeof start === "number") qs.set("start", String(start));

  return (
    <article
      className={[
        "relative isolate flex h-full flex-col gap-2 overflow-hidden rounded-xl bg-neutral-surface p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:gap-3 sm:rounded-2xl sm:p-5",
        borderless ? "" : "border border-neutral-border",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-secondary opacity-95 sm:h-2"
      />

      <h3 className="relative z-10 min-h-[2.75rem] font-heading text-base font-black leading-tight tracking-tight text-neutral-ink sm:min-h-[3.75rem] sm:text-lg md:text-xl">
        {title}
      </h3>

      <div
        className={[
          "relative z-10 overflow-hidden rounded-lg bg-[#0b1733] shadow-md sm:rounded-xl",
          borderless ? "" : "border border-primary/10",
        ].join(" ")}
      >
        <div className="relative aspect-video">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?${qs.toString()}`}
              title={`YouTube video player: ${title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play: ${title}`}
              className="group absolute inset-0 h-full w-full"
            >
              <Image
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />

              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/45 transition-colors group-hover:from-black/0 group-hover:to-black/55"
              />

              <span aria-hidden="true" className="absolute inset-0 grid place-items-center">
                <span className="relative grid place-items-center">
                  <span className="h-12 w-12 rounded-full bg-white/90 shadow-lg ring-4 ring-white/15 transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16 sm:ring-8 md:h-[72px] md:w-[72px]" />
                  <span
                    className="absolute ml-1 h-0 w-0 border-b-[8px] border-b-transparent border-l-[14px] border-l-primary-800 border-t-[8px] border-t-transparent drop-shadow-sm sm:border-b-[10px] sm:border-l-[17px] sm:border-t-[10px] md:border-b-[12px] md:border-l-[20px] md:border-t-[12px]"
                    style={{ transform: "translateX(2px)" }}
                  />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

