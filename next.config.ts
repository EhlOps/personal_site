import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    MAILGUN: process.env.MAILGUN,
    API_KEY: process.env.API_KEY,
    EMAIL: process.env.EMAIL,
  },
};

export default nextConfig;
