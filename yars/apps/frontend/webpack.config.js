const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.bundle.css',
    }),
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: [
          /\.(png|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          /\.(png|gif)/,
        ],
        loader: "file-loader"
      },
    ]
  },
};
