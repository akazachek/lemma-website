const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    index: "/src/index.js",
    render: "/src/render.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: devMode ? "[name].js" : "[name].[contenthash].js",
    sourceMapFilename: devMode
      ? "[name].js.map"
      : "[name].[contenthash].js.map",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      /* 
        render function is solely used by the backend, 
        no need to load the script for the client
        */
      excludeChunks: ["render"],
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[name].css" : "[name].[contenthash].css"
    })
  ]
};
