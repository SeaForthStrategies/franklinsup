"use client";

import { useEffect } from "react";

export function TallyEmbedLoader() {
  useEffect(() => {
    // Tally's embed loader needs the script in the page head, plus a call to `Tally.loadEmbeds()`.
    let cancelled = false;

    const tryLoad = () => {
      if (cancelled) return;
      const w = window as unknown as { Tally?: { loadEmbeds?: () => void } };
      if (typeof w.Tally?.loadEmbeds === "function") {
        w.Tally.loadEmbeds();
        return;
      }
      // Wait briefly in case the head script hasn't executed yet.
      window.setTimeout(tryLoad, 100);
    };

    tryLoad();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
