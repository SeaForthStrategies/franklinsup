import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "franklinforsupervisor.com" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "secure.franklinforsupervisor.com", pathname: "/**" },
      { protocol: "https", hostname: "voiceofsandiego.org", pathname: "/**" },
      { protocol: "https", hostname: "i.postimg.cc", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // In some environments (and on some macOS setups), file watcher limits can be low,
    // causing Watchpack `EMFILE: too many open files` and breaking route compilation.
    // Polling avoids opening a watcher per file.
    if (dev) {
      config.watchOptions = {
        ...(config.watchOptions ?? {}),
        poll: 1000,
        aggregateTimeout: 200,
        ignored: ["**/.git/**", "**/.next/**", "**/node_modules/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
