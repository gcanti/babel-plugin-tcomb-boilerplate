var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    })
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
}
