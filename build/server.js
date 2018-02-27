// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config.dev');

// //代理服务器
// var proxy = [{
// 	path: '/*/*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*代替
// 	target: 'http://localhost:3001',
// 	host: 'http://localhost:3001',
// 	secure: false
// }];
// var server = new WebpackDevServer(webpack(config), {
// 	publicPath: config.output.publicPath,
// 	progress: true,
// 	stats: {
// 		colors: true,
// 	},
// 	proxy
// });

// //将其他路由，全部返回index.html
// server.app.get('*', function(req, res) {
// 	res.sendFile(__dirname + '/index.html')
// });
// server.listen(8000, function() {
// 	console.log('正常打开8000端口')
// });

var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.dev');
var proxyMiddleware = require('http-proxy-middleware')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));

//代理服务器
app.use('/proxy-api', proxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
}))

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(8001, function() {
	console.log('正常打开8001端口')
});