"use client";

import { useEffect, useMemo, useState } from "react";

type PreviewMode = "desktop" | "tablet" | "mobile";

const STORAGE_KEY = "ffsv:dev-preview-mode";

function isLocalHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.endsWith(".local")
  );
}

export function ResponsivePreviewSwitcher() {
  const [isVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (!isLocalHost(window.location.hostname)) return false;
    if (new URLSearchParams(window.location.search).has("__frame")) return false;
    return true;
  });

  const [mode, setMode] = useState<PreviewMode>(() => {
    if (typeof window === "undefined") return "desktop";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "desktop" || saved === "tablet" || saved === "mobile") return saved;
    return "desktop";
  });

  const modes = useMemo(
    () =>
      [
        { id: "desktop" as const, label: "Desktop" },
        { id: "tablet" as const, label: "Tablet" },
        { id: "mobile" as const, label: "Mobile" },
      ] satisfies Array<{ id: PreviewMode; label: string }>,
    [],
  );

  useEffect(() => {
    if (!isVisible) return;
    document.documentElement.dataset.devPreview = mode;
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [isVisible, mode]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <div className="flex items-center gap-1 rounded-2xl border border-neutral-border/70 bg-neutral-surface/85 p-1 shadow-card backdrop-blur-xl">
        <div className="px-2.5 py-1 text-[11px] font-black uppercase tracking-widest text-neutral-ink/80">
          Preview
        </div>

        <div className="h-6 w-px bg-neutral-border/70" aria-hidden="true" />

        {modes.map((m) => {
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={[
                "h-9 rounded-xl px-3 text-xs font-black uppercase tracking-widest transition-all",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-base",
                active
                  ? "bg-neutral-base text-neutral-ink shadow-soft"
                  : "text-neutral-ink/70 hover:bg-neutral-base/70 hover:text-neutral-ink",
              ].join(" ")}
              aria-pressed={active}
            >
              {m.label}
            </button>
          );
        })}

        <div className="h-6 w-px bg-neutral-border/70" aria-hidden="true" />

        <button
          type="button"
          onClick={() => {
            setMode("desktop");
            window.localStorage.removeItem(STORAGE_KEY);
          }}
          className="h-9 rounded-xl px-3 text-xs font-black uppercase tracking-widest text-neutral-ink/70 transition-all hover:bg-neutral-base/70 hover:text-neutral-ink focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-base"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

