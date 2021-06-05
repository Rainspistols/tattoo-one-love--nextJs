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
      360, 375, 414, 600, 750, 800, 828, 1080, 1200, 1280, 1366, 1440, 1536, 1920, 2048,
    ],
  },
  future: {
    webpack5: true,
  },
};
