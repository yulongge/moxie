var path = require('path');
var webpack = require('webpack')
var ROOT_PATH = path.resolve(__dirname);
var CSS_PATH = path.resolve(ROOT_PATH, 'css');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, './'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [ '', '.js', 'jsx', 'css', 'scss' ],
        //root: 'yulongge',
        alias: {
            'sass': '/sass',
            'components': 'yulongge/app/components'
        }
	},
    /*devServer: {
                historyApiFallback: true,
                hot: true,
                inline: true,
                progress: true
                                            
    },*/
    devtool: 'source-map',
	module: {
		loaders: [
			{
			   	test: /\.js|jsx$/,
			   	loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}   
			},
			{
				test: /\.scss$/,
				//loaders: ['style', 'css', 'sass'],
				loader: 'style!css!sass'
				//include: CSS_PATH
			},
			{ test: /\.css$/, loader: 'style!css'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000'}
		]
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by GeYulong')
	]
}
