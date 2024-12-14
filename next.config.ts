import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.wallhaven.cc',
      },
    ],
  },
};

export default nextConfig;
