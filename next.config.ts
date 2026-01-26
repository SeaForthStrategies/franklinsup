import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'secure.franklinforsupervisor.com',
      },
      {
        protocol: 'https',
        hostname: 'franklinforsupervisor.com',
      },
    ],
  },
}

export default nextConfig
