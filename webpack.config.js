const path = require('path');

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
          options: {
            presets: ['react', 'es2015'],
          }
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
  devtool: 'source-map',
};
