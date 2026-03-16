"use client";

import { useEffect } from "react";

const TALLY_SCRIPT = "https://tally.so/widgets/embed.js";

function loadTallyEmbeds() {
  if (typeof window === "undefined") return;
  if (typeof (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally !== "undefined") {
    (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
    return;
  }
  document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
    const iframe = el as HTMLIFrameElement;
    if (iframe.dataset.tallySrc) iframe.src = iframe.dataset.tallySrc;
  });
}

export function TallyEmbedLoader() {
  useEffect(() => {
    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
    if (w.Tally) {
      loadTallyEmbeds();
      return;
    }
    if (document.querySelector(`script[src="${TALLY_SCRIPT}"]`)) {
      loadTallyEmbeds();
      return;
    }
    const s = document.createElement("script");
    s.src = TALLY_SCRIPT;
    s.onload = loadTallyEmbeds;
    s.onerror = loadTallyEmbeds;
    document.body.appendChild(s);
  }, []);

  return null;
}
