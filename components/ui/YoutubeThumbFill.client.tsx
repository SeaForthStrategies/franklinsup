"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface YoutubeThumbFillProps {
  videoId: string;
  alt: string;
  sizes: string;
  className?: string;
}

export function YoutubeThumbFill({ videoId, alt, sizes, className = "" }: YoutubeThumbFillProps) {
  const sources = useMemo(
    () => [
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/default.jpg`,
    ],
    [videoId],
  );

  const [sourceIndex, setSourceIndex] = useState(0);
  const src = sources[Math.min(sourceIndex, sources.length - 1)];

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes={sizes}
      className={className}
      onError={() => {
        setSourceIndex((prev) => (prev < sources.length - 1 ? prev + 1 : prev));
      }}
    />
  );
}
