var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env) {
	return {
		entry: "./js/app.js",
		output: {
			path: __dirname + "/dist",
			filename: "bundle.js"
		},
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        module: {
            rules: [
                {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
                {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader", exclude: /node_modules/},
                {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'},
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'
                            }
                        },
                        "css-loader"
                    ]
                }
            ]
        }
	}
}