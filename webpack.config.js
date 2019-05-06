const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HakunaMatata, hmRequireExpression;
// try {
  HakunaMatata = require('./src/hakuna-matata/plugin');
  hmRequireExpression = 'hakuna-matata';
// } catch {
//   HakunaMatata = require('@notyoyoma/hakuna-matata');
//   hmRequireExpression = '@notyoyoma/hakuna-matata';
// }

console.log(hmRequireExpression);

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
    new HakunaMatata({expression: hmRequireExpression}),
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  node: {
    fs: 'empty'
  }
};