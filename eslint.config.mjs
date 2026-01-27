import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  {
    // macOS Finder / AppleDouble artifacts can appear on external drives and break parsing.
    ignores: ["**/.DS_Store", "**/._*", "**/._*/**"],
  },
  // Equivalent of legacy:
  //   extends: ["next/core-web-vitals", "next/typescript"]
  ...coreWebVitals,
  ...typescript,
];

export default config;

