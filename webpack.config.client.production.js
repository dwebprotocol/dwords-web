const webpack = require('webpack')
const path = require('path')
const CURRENT_WORKING_DIRECTORY = process.cwd()

const config = {
  mode: "production",
  entry: [
    path.join(CURRENT_WORKING_DIRECTORY, 'main.js')
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIRECTORY, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'dswarm': 'dswarm-web',
      'fs': 'graceful-fs',
      'react-dom': '@hot-loader/react-dom',
      'util': './node_modules/util/util.js'
    }
  },
  experiments: {
    topLevelAwait: true
  }
}

module.exports = config