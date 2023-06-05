/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["tsx", "mdx"],
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // TODO: investigate SSG + optimized images
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
