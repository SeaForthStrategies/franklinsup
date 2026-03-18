"use client";

import { useCallback } from "react";

type PopupOptions = {
  key?: string;
  layout?: "default" | "modal";
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation:
      | "none"
      | "wave"
      | "tada"
      | "heart-beat"
      | "spin"
      | "flash"
      | "bounce"
      | "rubber-band"
      | "head-shake";
  };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  customFormUrl?: string;
  hiddenFields?: Record<string, unknown>;
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: unknown) => void;
};

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: PopupOptions) => void;
      closePopup?: (formId: string) => void;
      loadEmbeds?: () => void;
    };
  }
}

const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";
const DEFAULT_FORM_ID = "QKAYel";

let tallyScriptLoadPromise: Promise<void> | null = null;

function loadTallyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Tally?.openPopup) return Promise.resolve();
  if (tallyScriptLoadPromise) return tallyScriptLoadPromise;

  tallyScriptLoadPromise = new Promise<void>((resolve) => {
    const existing = document.querySelector(`script[src="${TALLY_SCRIPT_SRC}"]`) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener(
        "load",
        () => resolve(),
        { once: true },
      );
      existing.addEventListener(
        "error",
        () => resolve(),
        { once: true },
      );
      return;
    }

    const s = document.createElement("script");
    s.src = TALLY_SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });

  return tallyScriptLoadPromise;
}

export function TallyPopupButton({
  label,
  className,
  formId = DEFAULT_FORM_ID,
  options,
}: Readonly<{
  label: string;
  className?: string;
  formId?: string;
  options?: PopupOptions;
}>) {
  const onClick = useCallback(() => {
    void loadTallyScript().then(() => {
      window.Tally?.openPopup(formId, {
        layout: "modal",
        width: 700,
        hideTitle: true,
        ...(options ?? {}),
      });
    });
  }, [formId, options]);

  return (
    <button type="button" onClick={onClick} className={className ?? "site-cta site-cta--secondary"}>
      {label}
    </button>
  );
}

