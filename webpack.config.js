const path = require('path');

const prod = {
    mode: 'production',
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js'
    }
  }

const dev = {
  mode: 'production',
  entry: './app.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  }
} 


module.exports = process.env.ENV === 'prod' ? prod : dev;