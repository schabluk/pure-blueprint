const path = require('path')
const {paths, moduleConfig} = require('./webpack.base')

module.exports = {
  entry: path.join(paths.app, 'index.js'),
  output: {
    path: paths.build,
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: moduleConfig,
  devtool: 'source-map',
  externals: {
    'react': 'commonjs react',
    'react-dom' : 'commonjs react-dom'
  }
};
