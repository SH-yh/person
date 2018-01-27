const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");
const entry = "../app.js",
    outPutPath = "../public/build",
    outPutName = "build.js";
module.exports = {
    entry: path.resolve(__dirname, entry),
    output: {
        path: path.resolve(__dirname, outPutPath),
        filename: outPutName,
    },
    devtool: 'source-map',
    module:{
        rules: [
            {
                test:/\.jsx?$/,
                use:["babel-loader"]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
    ]
};