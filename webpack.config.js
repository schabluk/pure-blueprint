const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {paths, moduleConfig} = require('./webpack.base')

module.exports = {
  entry: path.join(paths.app, 'webapp.jsx'),
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: moduleConfig,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
