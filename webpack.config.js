const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      filename: 'bundle.[contenthash].js'
  },
  watch: true,
} 

const common = {
  plugins: [
    new HtmlWebpackPlugin({
        hash: 'body',
        template: './statics/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    })
  ]
}

module.exports = process.env.ENV === 'prod' ? {...common, ...prod} : { ...common, ...dev};