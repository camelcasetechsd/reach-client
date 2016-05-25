var webpack = require('webpack'); 
var config = require('./webpack.config.base.js');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = 'source-map';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]);

module.exports = config;