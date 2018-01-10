/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

// Webpack loaders file
const loaders = require('./webpack.loaders');

// Set to production
process.env.NODE_ENV = 'production';

// Setup Sass
const SassBundle = new ExtractTextPlugin({
  filename: '[name].bundle.css',
  allChunks: true,
});
loaders.push({
  test: /\.(css|sass|scss)$/,
  loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
});

module.exports = {
  entry: [
    path.join(__dirname, '/app/js/index.jsx'),
    path.join(__dirname, '/app/sass/index.sass'),
  ],
  module: {
    loaders,
  },
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/build'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new PreloadWebpackPlugin(),
    SassBundle,
    new DashboardPlugin(),
    new FaviconsWebpackPlugin(path.join(__dirname, '/app/img/favicon.png')),

    // Build for production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),

    // HTML Pages
    new HTMLWebpackPlugin({
      title: 'HomePage',
      template: path.join(__dirname, '/app/index.html'),
      filename: 'index.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'AboutPage',
      template: path.join(__dirname, '/app/about.html'),
      filename: 'about.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'NotFoundPage',
      template: path.join(__dirname, '/app/404.html'),
      filename: '404.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginAnime',
      template: path.join(__dirname, '/app/plugin-anime.html'),
      filename: 'plugin-anime.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginMoment',
      template: path.join(__dirname, '/app/plugin-moment.html'),
      filename: 'plugin-moment.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginScroll',
      template: path.join(__dirname, '/app/plugin-scroll.html'),
      filename: 'plugin-scroll.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginThree',
      template: path.join(__dirname, '/app/plugin-three.html'),
      filename: 'plugin-three.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginUIKit',
      template: path.join(__dirname, '/app/plugin-uikit.html'),
      filename: 'plugin-uikit.html',
      inject: true,
      allChunks: true,
    }),
  ],
};
