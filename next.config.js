const path = require("path");
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === "development";

const IS_GITHUB_PAG = process.env.GITHUB_PAG;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: IS_GITHUB_PAG ? "/toys" : "",
  // experimental: {
  //   modularizeImports: {
  //     'antd': {
  //       // 目前只支持 lowerCase upperCase camelCase，antd 是连字符，暂不支持，这里先通过 babelrc 实现 
  //       // https://nextjs.org/docs/advanced-features/compiler#modularize-imports
  //       transform: 'antd/lib/{{lowerCase member}}',
  //     },
  //   },
  // },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          GITHUB_PAG: IS_GITHUB_PAG
        }
      })
    )
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  compiler: {
    removeConsole: true,
    // 实验属性
    // swcMinify: isDev ? false : true
  }
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
