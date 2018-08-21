const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => {
    console.log(mode);
    return {
        mode,
        entry: "./js/app.js",
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    };
};