import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES ? "/aelluminate" : "",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.GITHUB_PAGES ? "/aelluminate/" : "",
}

export default nextConfig
