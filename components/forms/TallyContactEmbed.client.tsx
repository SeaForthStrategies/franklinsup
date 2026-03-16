"use client";

import { useEffect, useState } from "react";

const TALLY_EMBED_BASE =
  "https://tally.so/embed/QKAYel?transparentBackground=1&formEventsForwarding=1";

/**
 * Builds the Tally embed URL with originPage and all current query parameters
 * so they can be saved via hidden fields in Tally (e.g. originPage, ref, email).
 */
function buildTallyEmbedUrl(): string {
  if (typeof window === "undefined") return TALLY_EMBED_BASE;
  const params = new URLSearchParams();
  params.set("originPage", window.location.pathname);
  const search = new URLSearchParams(window.location.search);
  for (const [key, value] of search) {
    params.set(key, value);
  }
  const query = params.toString();
  return query ? `${TALLY_EMBED_BASE}&${query}` : TALLY_EMBED_BASE;
}

export function TallyContactEmbed() {
  const [embedUrl, setEmbedUrl] = useState(TALLY_EMBED_BASE);

  useEffect(() => {
    setEmbedUrl(buildTallyEmbedUrl());
  }, []);

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Contact Mayor John Franklin"
      className="absolute inset-0 h-full w-full"
    />
  );
}
