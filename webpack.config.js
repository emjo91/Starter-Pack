var webpack = require('webpack');

module.exports = ({ mode }) => {
    console.log(mode);
    return {
        mode,
        entry: "./js/app.js",
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        }
    };
};