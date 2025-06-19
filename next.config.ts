import type { NextConfig } from "next";

const repo = "synopsis-next-prototype"; // <-- your GitHub repo name

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;