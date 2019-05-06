const path = require('path');
const HakunaMatata = require('./src/hakuna-matata/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HakunaMatata({expression: 'hakuna-matata'}),
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  node: {
    fs: 'empty'
  }
};