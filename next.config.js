const path = require("path");

console.log(process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "dist",
  basePath: isDev ? "" : "/toys",
  async rewrites() {
    return isDev
      ? []
      : [
          {
            source: "/",
            destination: "/toys",
          },
        ];
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

const withPlugins = require("next-compose-plugins");

const withLess = require("next-with-less");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const plugins = [
  [
    withLess,
    {
      lessLoaderOptions: {
        /* ... */
      },
    },
  ],
  [
    withBundleAnalyzer,
    {
      enabled: process.env.ANALYZE === "true",
    },
  ],
];

module.exports = withPlugins(plugins, nextConfig);
