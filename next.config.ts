import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  import('@opennextjs/cloudflare')
    .then(m => m.initOpenNextCloudflareForDev())
    .catch(() => {});
}
