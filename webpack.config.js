const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    new CopyWebpackPlugin([
      {
//Wildcard is specified hence will copy only css files
          from: './statics/css', //Will resolve to RepoDir/src/css and all *.css files from this directory
          to: 'css' //Copies all matched css files from above dest to dist/css
      }
  ]),

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