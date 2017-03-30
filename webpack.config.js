var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.json?$/,
        loader: 'json-loader',
      },
      {
        test: /.less?$/,
        loader: 'style!css!less',
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};