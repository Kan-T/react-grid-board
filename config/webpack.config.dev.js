const path = require("path");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base.js"); // public config

const devConfig = {
  entry: "./src/sample/index.tsx", // Entry file
  mode: "development", // develop mode
  output: {
    filename: "sample.bundle.js", // Output file
    path: path.resolve(__dirname, "../src/sample") // Output dir
  },
  devServer: { // webpack-dev-server config
    contentBase: path.join(__dirname, "../src/sample"),
    compress: true,
    port: 9000,
    open: true // open browser automatically
  }
};

module.exports = merge(baseConfig, devConfig);
