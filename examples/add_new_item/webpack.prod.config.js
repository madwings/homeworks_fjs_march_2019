const path = require('path');
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
    mode: 'production',
	target: 'web',
    entry: {
        form: './index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    plugins: [
        new ClosureCompilerPlugin({
            compiler: {
                compilation_level: 'SIMPLE',
				warning_level: 'DEFAULT',
            },
            chunks: ['index'],
            concurrency: 3,
        }),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
    ],
};
