const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', 'res.cloudinary.com'],
    minimumCacheTTL: 86400,
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'data', 'blog'),
            to: path.resolve(__dirname, '.next', 'data', 'blog'),
            globOptions: {
              ignore: ['**/*.mdx'],
            },
          },
          {
            from: path.resolve(__dirname, 'data', 'projects'),
            to: path.resolve(__dirname, '.next', 'data', 'projects'),
            globOptions: {
              ignore: ['**/*.mdx'],
            },
          },
        ],
      })
    );

    return config;
  },
};
