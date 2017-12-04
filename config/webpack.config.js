var path = require('path');
var webpack = require('webpack');

module.exports = {
  //入口文件并添加了热加载
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../src/main.js')],
  output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js'  //输出文件
  },
  module: {
    loaders: [
      {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015', 'react']
          } //将react编译成js文件
      },
      //打包css文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }, 
      //编译sass文件
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'}, 
      //对图片进行打包
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    //自动扩展文件后缀名
    extensions: ['.js', '.json', '.scss', '.ts']   
  },
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
}