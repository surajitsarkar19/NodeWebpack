/**
 * https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a
 */

const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    // removing 'src' directory from entry point, since 'context' is taking care of that
    entry: {
        main:"./app.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        //contentBase: path.resolve(__dirname, "./dist/assets/media"), //static content location
        compress: true, //Enable gzip compression for everything served
        port: 9090,
        stats: 'errors-only', //To show only errors in your bundle
        open: true //open the app at the first time in browser
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: /src/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    }
};