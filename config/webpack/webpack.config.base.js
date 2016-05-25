var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var KssWebpackPlugin = require('kss-webpack-plugin');

var KssConfig = {
  source: ['./public/assets/sass', './application/components'],
  destination : './public/styleguide',
  title: 'Comic Relief PatternLab Frost',
  css: '../assets/css/bundle.min.css'
}

var NODE_ENV = process.env.NODE_ENV;

module.exports = {

  devtool: 'source-map',
  
  entry: [
    'babel-polyfill',
    './application/client.jsx'
  ],
  
  output: {
    path: './public/assets/',
    filename: 'js/bundle.min.js'
  },

  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['babel-loader'], 
      exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url?sourceMap!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      {test: /\.rt/, loader: 'react-templates-loader', include: path.join(__dirname, 'application')}
    ]
  },

  plugins: [
    new KssWebpackPlugin(KssConfig),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/bundle.min.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.bundle\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardDuplicates: {removeAll: true } },
      canPrint: true
    })
  ]
};
