import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next 16 writes AGENTS.md / CLAUDE.md on every build; not wanted in this repo.
  agentRules: false,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
