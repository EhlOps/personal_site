import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pins the workspace root to this repo, avoiding Next.js misdetecting it
  // via an unrelated lockfile elsewhere on a dev machine's filesystem.
  outputFileTracingRoot: path.resolve(__dirname),
  output: "export",
  // Injected by actions/configure-pages in CI. Empty string for a custom
  // domain (ehlops.com) served from the repo root, which is the case here.
  basePath: process.env.PAGES_BASE_PATH || "",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
