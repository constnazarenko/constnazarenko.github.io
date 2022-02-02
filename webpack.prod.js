const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'CV',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
    ],
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});
