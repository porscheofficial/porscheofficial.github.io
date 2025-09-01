/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["tsx", "mdx"],
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  images: {
    loader: "custom",
    // eslint-disable-next-line no-magic-numbers
    imageSizes: [],
    // eslint-disable-next-line no-magic-numbers
    deviceSizes: [1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/assets",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "90",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml/,
      use: "js-yaml-loader",
    });
    return config;
  },

  // ── HTTP headers ──
  async headers() {
    return [
      {
        source: "/open-source-software-notice",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" },
        ],
      },
      {
        source: "/open-source-software-notice/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" },
        ],
      },
    ];
  },
};

const { withContentlayer } = require("next-contentlayer2");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
