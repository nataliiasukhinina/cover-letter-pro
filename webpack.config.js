const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new NodePolyfillPlugin(),
    new Dotenv({
      path: '.env'
    })
  ]
};
