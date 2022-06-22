const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { dependencies, name: packageName } = require("./package.json");

module.exports = {
  entry: {
    coreLib: "./src/index",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 2000,
    historyApiFallback: true,
    hot: "only",
  },
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".mjs", ".jsx", ".css"],
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
      name: "core",
      filename: "core.remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./Tabs": "./src/Tabs",
      },
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      ],
    }),
  ],
};
