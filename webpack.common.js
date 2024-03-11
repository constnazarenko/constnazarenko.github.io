const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules\/(?!(common-mui-theme)\/).*/,
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|gif|png|wav|mp3)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.ico',
      template: './src/index.html',
      filename: './index.html',
      inject: 'body',
      heapId: process.env.REACT_APP_HEAP_ID,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'assets/images' },
        { from: 'src/api', to: 'api' },
      ],
    }),
  ],
};
