const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new webpackDashboard(),
        // new BundleAnalyzerPlugin(),
        new DuplicatePackageCheckerPlugin({
            verbose: true,
            emitError: true,
            showHelp: false,
            strict: false,
            exclude(instance) {
                return instance.name === "fbjs";
            }
        })
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
    }
});
