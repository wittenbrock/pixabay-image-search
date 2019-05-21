import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  // ------------------------------------
  // Entry Points
  // ------------------------------------
  entry: ['@babel/polyfill', './src/index.js'],

  // ------------------------------------
  // Bundle Output
  // ------------------------------------
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.[chunkhash].js',
    publicPath: '/',
  },

  // ------------------------------------
  // Development Server
  // ------------------------------------
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',

  // ------------------------------------
  // Bundle Optimization
  // ------------------------------------
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
    },
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },

  // ------------------------------------
  // Modules
  // ------------------------------------
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ], // rules array ends
  },

  // ------------------------------------
  // Plugins
  // ------------------------------------
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new CopyWebpackPlugin([{ from: '_redirects' }]),
  ], // plugins array ends
}; // module.exports ends
