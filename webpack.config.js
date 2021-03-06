const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const MyFirstWebpackPlugin = require("./build-utils/MyFirstWebpackPlugin");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return webpackMerge (
        {
            mode: "none",
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 5000
                                }
                            }
                        ]
                    },
                    {

                    }
                ]
            },
            entry: "./src/index.js",
            output: {
                path: __dirname + "/dist",
                filename: "bundle.js",
                chunkFilename: "[name].lazy-chunk.js" 
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin(),
                new MyFirstWebpackPlugin()
            ]
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};