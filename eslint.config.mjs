import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  // Equivalent of legacy:
  //   extends: ["next/core-web-vitals", "next/typescript"]
  ...coreWebVitals,
  ...typescript,
];

export default config;

