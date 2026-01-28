"use client";

import { useEffect, useState } from "react";

import { ResponsivePreviewSwitcher } from "@/components/dev/ResponsivePreviewSwitcher.client";

/**
 * Dev-only helper to avoid hydration noise in tooling environments.
 * We render nothing on the server and on the first client render, then
 * mount the preview switcher after hydration.
 */
export function DevOnlyPreviewSwitcher() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Dev-only: avoid rendering this UI during SSR/first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ResponsivePreviewSwitcher />;
}

