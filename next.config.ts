import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  trailingSlash: true,
  compress: false,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;