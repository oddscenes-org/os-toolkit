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

// Set to development
process.env.NODE_ENV = 'development';

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
  devServer: {
    historyApiFallback: {
      rewrites: [
        // Rewrite URLs for devserver
        { from: /\/about/, to: '/about.html' },
        { from: /\/plugin-anime/, to: '/plugin-anime.html' },
        { from: /\/plugin-moment/, to: '/plugin-moment.html' },
        { from: /\/plugin-scroll/, to: '/plugin-scroll.html' },
        { from: /\/plugin-video/, to: '/plugin-video.html' },
        { from: /\/plugin-modal/, to: '/plugin-modal.html' },
        { from: /\/plugin-tooltip/, to: '/plugin-tooltip.html' },
        { from: /\/plugin-three/, to: '/plugin-three.html' },
      ],
    },
  },
  plugins: [
    new PreloadWebpackPlugin(),
    SassBundle,
    new DashboardPlugin(),
    new FaviconsWebpackPlugin(path.join(__dirname, '/app/img/favicon.png')),

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
    // Plugin Pages
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
      title: 'PluginVideo',
      template: path.join(__dirname, '/app/plugin-video.html'),
      filename: 'plugin-video.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginModal',
      template: path.join(__dirname, '/app/plugin-modal.html'),
      filename: 'plugin-modal.html',
      inject: true,
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
      title: 'PluginTooltip',
      template: path.join(__dirname, '/app/plugin-tooltip.html'),
      filename: 'plugin-tooltip.html',
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
  ],
};
