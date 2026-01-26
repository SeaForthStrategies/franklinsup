import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Disable image optimization for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'franklinforsupervisor.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.franklinforsupervisor.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'voiceofsandiego.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
