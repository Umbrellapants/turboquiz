var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './takeQuiz/app.jsx',
  output: { path: __dirname+'/bundles', filename: 'appbundle.js' },
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