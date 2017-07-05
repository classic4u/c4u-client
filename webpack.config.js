const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'c4u.js',
    path: path.resolve(__dirname, 'output'),
    publicPath: 'wtf',
    // publicPath: path.resolve(__dirname, '../', 'api', 'public'),
  },
  module: {
    rules: [
      { test: /\.js$|\.jsx$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  devtool: 'source-map',
};
