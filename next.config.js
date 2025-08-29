/* eslint-disable no-undef */

/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
  assetPrefix:"",
  images: {
    loader: "imgix",
    path: "/",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/landing/20250828-huan.html",
      },
    ];
  },
};

module.exports = nextConfig;
