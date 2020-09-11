require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

// for correct SVG imports
const withImages = require('next-images');
module.exports = withImages();
