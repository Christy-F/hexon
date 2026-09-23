import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    // Some versions put it here
  },
  // @ts-ignore
  allowedDevOrigins: ["hexon-preview-99.loca.lt", "hexon-client-demo.loca.lt", "localhost.run", "loca.lt", "warm-owl-39.loca.lt"],
};

export default nextConfig;
