const path = require("path");
const webpack = require('webpack')

// const isDev = process.env.NODE_ENV === "development";

const IS_GITHUB_PAG = process.env.GITHUB_PAG;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: IS_GITHUB_PAG ? "/toys" : "",
  // async rewrites() {
  //   return IS_GITHUB_PAG
  //     ? [
  //       {
  //         source: "/",
  //         destination: "/toys",
  //       },
  //     ] : [];
  // },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          GITHUB_PAG: IS_GITHUB_PAG
        }
      })
    )
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
