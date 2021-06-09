const path = require("path");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  entry: "./src/index.ts", //Entry
  mode: "production",
  output: { // Output config
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    libraryTarget: "umd", // Use npm, used from node_modules
    library: "react-grid-board" // Lib name
  }
};

module.exports = merge(baseConfig, devConfig);
