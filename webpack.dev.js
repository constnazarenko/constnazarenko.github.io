const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ path: './.env.dev' });
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[fullhash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  plugins: [
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    devMiddleware: {
      publicPath: '/',
      serverSideRender: false,
      writeToDisk: true,
    },
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
    },
    open: true,
    static: {
      directory: path.resolve(__dirname, 'src/assets/static'),
      staticOptions: {},
      // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
      // Can be:
      // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
      publicPath: '/assets/static',
      // Can be:
      // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
      serveIndex: true,
      // Can be:
      // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
      watch: true,
    },
    port: 3012,
    proxy: [
      {
        context: ['/mockServiceWorker.js', 'mockServiceWorker.js'],
        target: 'http://localhost:3004/assets/static',
      },
    ],
  },
});
