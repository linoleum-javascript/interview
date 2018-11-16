
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};