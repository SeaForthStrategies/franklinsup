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
          50: "#0a1f44",
          100: "#0a1f44",
          200: "#0a1f44",
          300: "#0a1f44",
          400: "#0a1f44",
          500: "#0a1f44",
          600: "#0a1f44",
          700: "#0a1f44",
          800: "#0a1f44",
          900: "#071734",
        },
        secondary: {
          /* Franklin accent blue */
          DEFAULT: "#1b5cff",
          50: "#1b5cff",
          100: "#1b5cff",
          200: "#1b5cff",
          300: "#1b5cff",
          400: "#1b5cff",
          500: "#1b5cff",
          600: "#1b5cff",
          700: "#1b5cff",
          800: "#1b5cff",
          900: "#1b5cff",
        },
        accent: {
          /* Franklin record accent (light/cyan blue) */
          DEFAULT: "#19b7ff",
          50: "#19b7ff",
          100: "#19b7ff",
          200: "#19b7ff",
          300: "#19b7ff",
          400: "#19b7ff",
          500: "#19b7ff",
          600: "#19b7ff",
          700: "#19b7ff",
          800: "#19b7ff",
          900: "#19b7ff",
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
        heading: ["var(--font-heading)", "Montserrat", "ui-sans-serif", "system-ui"],
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
