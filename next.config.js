const path = require("path");

const isDev = process.env.NODE_ENV === "development";

const IS_VERCEL = process.env.VERCEL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "dist",
  basePath: isDev || IS_VERCEL ? "" : "/toys",
  async rewrites() {
    return isDev || IS_VERCEL
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
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
};

const withPlugins = require("next-compose-plugins");

const withLess = require("next-with-less");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withMDX = require('@next/mdx')

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
  [
    withMDX(),
    {
      extension: /\.mdx?$/,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    }
  ]
];

module.exports = withPlugins(plugins, nextConfig);
