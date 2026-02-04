import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: {
          /* Franklin navy */
          DEFAULT: "#0a1f44",
        },
        secondary: {
          /* Franklin accent blue */
          DEFAULT: "#1b5cff",
        },
        accent: {
          /* Record accent (blue; avoid cyan/teal) */
          DEFAULT: "#3b82f6",
        },
        neutral: {
          /* Franklin neutrals */
          // Light-first: “premium” off-white base (not flat white)
          // - base: page background (tinted)
          // - surface: true white cards/surfaces
          // - border: cool gray-blue separators
          // - ink/slate/muted: text hierarchy on light
          base: "#F6F8FF",
          surface: "#FFFFFF",
          border: "#D6DFEF",
          ink: "#0B1220",
          slate: "#334155",
          muted: "#475569",
        },
      },
      fontFamily: {
        heading: ["var(--font-body)", "Montserrat", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "Montserrat", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 12px 30px -18px rgba(2, 6, 23, 0.35)",
      },
      letterSpacing: {
        tighter2: "-0.03em",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [
    forms,
  ],
};

export default config;
