const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { dependencies, name: packageName } = require("./package.json");

module.exports = {
  entry: {
    productsApp: "./src/index",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
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
      name: "products",
      filename: "products.remoteEntry.js",
      remotes: {
        core: "core@http://localhost:2000/core.remoteEntry.js",
        shell: "shell@http://localhost:3000/shell.remoteEntry.js",
      },
      exposes: {
        "./ProductsApplication": "./src/ProductsApplication",
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
