require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};

// for correct SVG imports
const withImages = require('next-images');
module.exports = withImages();
