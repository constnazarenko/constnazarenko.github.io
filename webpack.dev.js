const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    plugins: [
    ],
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/, exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'assets'),
            publicPath: '/assets',
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
        },
        devMiddleware: {
            index: true,
            publicPath: '/',
            serverSideRender: true,
            writeToDisk: true,
        },
        hot: true,
        liveReload: false,
        open: {
            app: { name: 'Google Chrome', arguments: ['--incognito', '--new-window'] },
        },
        historyApiFallback: true,
        port: 3000
    },
});
