const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
	target: 'web',
    entry: {
        form: './index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    devtool: 'source-map',
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
	],
};
