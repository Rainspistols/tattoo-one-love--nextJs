const withImages = require('next-images');

// module.exports = {
//   env: {
//     API_URL: process.env.NEXT_PUBLIC_API_URL,
//   },
//   publicRuntimeConfig: {
//     API_URL: process.env.NEXT_PUBLIC_API_URL,
//   },
//   withImages()
// };

// module.exports = withImages();

// for correct SVG imports

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['localhost', 'admin.tattooonelove.com'],
    deviceSizes: [
      360,
      375,
      414,
      600,
      750,
      800,
      828,
      1080,
      1200,
      1280,
      1366,
      1440,
      1536,
      1920,
      2048,
    ],

  },
};
