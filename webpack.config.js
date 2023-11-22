const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
// const devMode = mode === 'development'

module.exports = {
	mode,
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: 'index.[contenthash:8].js',
		path: path.join(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist'],
				},
			},
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|ttf|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
}
