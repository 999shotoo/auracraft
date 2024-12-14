import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.wallhaven.cc',
      },
      {
        protocol: 'https',
        hostname: 'w.wallhaven.cc',
      },
    ],
  },
};

export default nextConfig;
