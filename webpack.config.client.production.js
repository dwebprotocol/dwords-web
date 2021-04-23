const path = require('path')
const webpack = require('webpack')

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
      'util': './node_modules/util/util.js'
    }
  }
}

module.exports = config
