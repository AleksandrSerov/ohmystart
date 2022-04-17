/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
	const webpackOptions = {
		resolve: {
			extensions: ['.ts', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.ts?$/,
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			],
		},
	};

	on('file:preprocessor', webpackPreprocessor({ webpackOptions }));
};
