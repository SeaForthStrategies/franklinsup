"use client";

import { useState } from "react";
import Image from "next/image";

interface IssuesVideoCardProps {
  title: string;
  videoId: string;
  start?: number;
}

export function IssuesVideoCard({ title, videoId, start }: IssuesVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const qs = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    playsinline: "1",
  });
  if (typeof start === "number") qs.set("start", String(start));

  return (
    <article className="relative isolate flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-neutral-border bg-neutral-base p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-accent-400 to-secondary-500 opacity-95"
      />

      <h3 className="relative z-10 min-h-[3.75rem] font-heading text-lg font-black leading-tight tracking-tight text-primary-800 sm:text-xl">
        {title}
      </h3>

      <div className="relative z-10 overflow-hidden rounded-xl border border-primary/10 bg-[#0b1733] shadow-md">
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
                  <span className="h-16 w-16 rounded-full bg-white/90 shadow-lg ring-8 ring-white/15 transition-transform duration-200 group-hover:scale-105 sm:h-[72px] sm:w-[72px]" />
                  <span
                    className="absolute ml-1 h-0 w-0 border-b-[12px] border-b-transparent border-l-[20px] border-l-primary-800 border-t-[12px] border-t-transparent drop-shadow-sm"
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

