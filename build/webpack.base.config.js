const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: isDev
    ? '#source-map'
    : false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      '~': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: isDev
          ? ['vue-style-loader', 'css-loader']
          : ExtractTextPlugin.extract({
              use: 'css-loader?minimize',
              fallback: 'vue-style-loader'
            })
      }
    ]
  },
  performance: {
    maxEntrypointSize: 800000,
    hints: isDev ? 'warning' : false
  },
  plugins: isDev
    ? [
        new FriendlyErrorsPlugin()
      ]
    : [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        new ExtractTextPlugin({
          filename: 'common.[chunkhash].css'
        })
      ]
}
