const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { dependencies, name: packageName } = require("./package.json");

module.exports = {
  entry: {
    orderApp: "./src/index",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3003,
    historyApiFallback: true,
    hot: "only",
  },
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "order",
      filename: "order.remoteEntry.js",
      remotes: {
        core: "core@http://localhost:2000/core.remoteEntry.js",
        shell: "shell@http://localhost:3000/shell.remoteEntry.js",
      },
      exposes: {
        "./OrderApplication": "./src/OrderApplication",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
