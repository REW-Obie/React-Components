var path = require('path');
var webpack = require('webpack');

module.exports = {
  //the top level file(s) that we want to include in our build
  entry: './default.js',
  // an object containing your output configuration
  output: { path: __dirname, filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders:[
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.php$/,
        loaders:[
          'html-minify',
          'php-loader'
        ]
      }
    ]
  },
};
