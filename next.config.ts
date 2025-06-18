import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  base: process.env.BASE_PATH || "/synopsis-next-prototype",
};

export default nextConfig;
