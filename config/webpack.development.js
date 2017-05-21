const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  entry: [ 'webpack-hot-middleware/client?path=http://localhost:9000/__webpack_hmr&timeout=20000'],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './../client/index.html'),
      filename: 'index.html',
      mobile: true,
      inject: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'web'
});