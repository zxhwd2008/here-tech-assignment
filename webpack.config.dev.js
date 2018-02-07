const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* eslint-disable max-len */
module.exports = {
  devtool: 'source-map',
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/bundle.[hash].js',
    publicPath: '/',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('static/style.[hash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        include: [/node_modules\/.*antd/],
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&modules=false!postcss?sourceMap'
        ),
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less?sourceMap'
        ),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/images/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/fonts/[name].[ext]',
        },
      }
    ],
  },
  postcss: [
    require('autoprefixer'),
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
}
