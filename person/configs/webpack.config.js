const webpack = require('webpack');
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const entry = "../app.js";
const outPutPath = "../public/build";
const outPutName = "build.js";
module.exports = {
    entry: path.resolve(__dirname, entry),
    output: {
        path: path.resolve(__dirname, outPutPath),
        filename: outPutName,
        publicPath: "/build"
    },
    devServer:{
        port: 3030,
        contentBase: path.join(__dirname, '../views/'),
        publicPath: "/build",
        inline: true,
        hot: true
    },
    module:{
        rules: [
            {
                test:/\.jsx?$/,
                use:["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    'loader': 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                    'options':{
                        publicPath:'/'
                    }
                },


            },
            {
                test: /\.scss$/,
                use:['style-loader', 'css-loader?modules', 'sass-loader']
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
        ]
    },
    devtool:"inline-source-map",
    plugins: [
        new UglifyJSPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};