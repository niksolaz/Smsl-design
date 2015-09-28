var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

module.exports = {
  entry: './entry.js',  //The entry point for the bundle. 

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' } //module loader jsx
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}