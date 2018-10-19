const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.bundle.css',
    }),
  ],
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
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src/"),
    }
  }
};
