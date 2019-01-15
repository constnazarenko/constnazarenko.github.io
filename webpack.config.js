const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackDashboard = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const dist = 'dist';

const devMode = process.env.NODE_ENV !== 'production';

// Plugins objects
const copyFiles = new CopyWebpackPlugin([ {from:'src/images', to:'images'}  ]);
const friendlyErrors = new FriendlyErrorsWebpackPlugin();
const bundleAnalizer = new BundleAnalyzerPlugin();
const dashboard = new webpackDashboard();
const cleanDist = new CleanWebpackPlugin(dist, {} );
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const cssPlugin = new MiniCssExtractPlugin(
    {filename: devMode ? "[name].css" : "[name].[hash].css" , chunkFilename: devMode ? "[id].css" : "[id].[hash].css"}
);
const duplicationCheck = new DuplicatePackageCheckerPlugin({
    // Also show module that is requiring each duplicate package (default: false)
    verbose: true,
    // Emit errors instead of warnings (default: false)
    emitError: true,
    // Show help message if duplicate packages are found (default: true)
    showHelp: false,
    // Warn also if major versions differ (default: true)
    strict: false,
    /**
     * Exclude instances of packages from the results.
     * If all instances of a package are excluded, or all instances except one,
     * then the package is no longer considered duplicated and won't be emitted as a warning/error.
     * @param {Object} instance
     * @param {string} instance.name The name of the package
     * @param {string} instance.version The version of the package
     * @param {string} instance.path Absolute path to the package
     * @param {?string} instance.issuer Absolute path to the module that requested the package
     * @returns {boolean} true to exclude the instance, false otherwise
     */
    exclude(instance) {
        return instance.name === "fbjs";
    }
});

module.exports = {
    entry: { bundle: './src/index.js' },
    output: {
        path: path.resolve(__dirname, dist),
        publicPath: "/",
        filename: '[name].[hash].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", '.css', '.scss']
    },

    module: {
        rules: [
            { test: /\.scss?$/, exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            { test: /\.tsx?$/, use: { loader: "awesome-typescript-loader" } },
            { test: /\.js$/, exclude: /node_modules/, use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env']
                    ]
                }
            }] },
            { enforce: "pre", test: /\.js$/, exclude: /node_modules/, use: { loader: "source-map-loader" } },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, exclude: /node_modules/, loader: "file" }
        ]
    },
    plugins: [
        copyFiles,
        friendlyErrors,
        // bundleAnalizer,
        dashboard,
        cleanDist,
        cssPlugin,
        htmlPlugin,
        duplicationCheck
    ],
    devServer: {
        quiet: true,
        hot: true
    }
};
