/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withPlugins = require("next-compose-plugins");

const withLess = require("next-with-less");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const plugins = [
  [withLess, {
    lessLoaderOptions: {
      /* ... */
    },
  }],
  [
    withBundleAnalyzer, {
      enabled: process.env.ANALYZE === 'true'
    }
  ]
];


module.exports = withPlugins(plugins, nextConfig)
