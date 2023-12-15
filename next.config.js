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
    imageSizes: [10, 16, 32, 48, 64, 96, 128, 256, 384],
    // eslint-disable-next-line no-magic-numbers
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/assets",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
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
};
const { withContentlayer } = require("next-contentlayer");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
