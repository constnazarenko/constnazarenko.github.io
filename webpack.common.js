const HtmlWebPackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { bundle: './src/index.tsx' },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", '.css', '.scss']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-typescript", {isTSX: true, allExtensions: true}],
                            "@babel/preset-react",
                            ["@babel/preset-env", {
                                "targets": {
                                    "browsers": ["last 2 versions"]
                                }
                            }]
                        ]
                    }
                }] },
            { test: /\.js$/, exclude: /node_modules/, use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": {
                                    "browsers": ["last 2 versions"]
                                }
                            }]
                        ]
                    }
                }] },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, exclude: /node_modules/, loader: "file" }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{from:'src/images', to:'images'}, {from:'src/api', to:'api'}]),
        new HtmlWebPackPlugin({template: "./src/index.html", filename: "./index.html"}),
        new FriendlyErrorsWebpackPlugin()
    ],
    devServer: {
        quiet: true,
        hot: true
    }
};
