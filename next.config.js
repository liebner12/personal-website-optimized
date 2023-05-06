// const runtimeCaching = require('next-pwa/cache');

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   runtimeCaching,
//   buildExcludes: [/middleware-manifest.json$/],
//   disable: process.env.NODE_ENV === 'development',
// });
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['i.scdn.co', 'res.cloudinary.com'],
  },
});
