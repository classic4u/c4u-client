const path = require('path')
const webpack = require('webpack')

config = {
  entry: './src/index.js',
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
}

console.log(process.env)

devConfig = {
  devtool: 'source-map',
  output: {
    filename: 'c4u.js',
    path: path.resolve(__dirname, 'output'),
    publicPath: 'wtf',
  },
}

// TODO: There must be a better way!
if (process.env.npm_lifecycle_event === 'webpack-dev-server') {
  Object.assign(config, devConfig)
}

prodConfig = {
  output: {
    filename: 'c4u.[hash].js',
    path: path.resolve(__dirname, 'output'),
    publicPath: 'wtf',
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
}

// TODO: There must be a better way!
if (process.env.npm_lifecycle_event === 'webpack') {
  Object.assign(config, prodConfig)
}

module.exports = config
