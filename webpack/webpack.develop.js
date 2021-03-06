const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = webpackMerge(config(), {
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  devServer: {
    stats: "minimal",
    port: 3000, // most common port
    contentBase: "./build",
    inline: true
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'dev',
      DEBUG: true
    })
  ]
});
