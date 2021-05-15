var path = require('path');
var DotenvWebPack = require('dotenv-webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

var vendor = [
	'react',
	'prop-types',
	'react-dom',
	'react-router-dom',
	'@reduxjs/toolkit',
	'react-redux',
	'react-hook-form',
	'@hookform/resolvers',
	'yup',
	'@material-ui/core',
	'@material-ui/icons',
	'axios'
];

var webpackConfig = {
	entry: {
		bundle: './src/index.jsx',
		vendor
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js?x)$/i,
				use: { loader: 'babel-loader' },
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: { loader: 'file-loader' }
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'$redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit'),
			$components: path.resolve(__dirname, 'src/components'),
			$constants: path.resolve(__dirname, 'src/constants'),
			$assets: path.resolve(__dirname, 'src/assets'),
			$themes: path.resolve(__dirname, 'src/themes'),
			$hooks: path.resolve(__dirname, 'src/hooks'),
			$api: path.resolve(__dirname, 'src/api')
		}
	},
	plugins: [
		new DotenvWebPack(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			excludeChunks: ['vendor']
		})
	],
	devServer: {
		historyApiFallback: true
	},
	performance: {
		hints: false
	},
	devtool: 'eval-source-map'
};

module.exports = webpackConfig;

/*
  Install latest version package dependencies with yarn
  ya react prop-types react-dom react-router-dom @reduxjs/toolkit react-redux react-hook-form @hookform/resolvers yup @material-ui/core @material-ui/icons axios
  yad @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader style-loader dotenv-webpack html-webpack-plugin webpack webpack-cli webpack-dev-server
*/
