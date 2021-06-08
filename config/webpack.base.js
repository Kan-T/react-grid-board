const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // pack components' css into one single file in `dist` dir

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        use: ["ts-loader", "eslint-loader"],
        exclude: [
          path.resolve(__dirname, "../node_modules")
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
        use: [{
          loader: "file-loader", options: {
            name: "images/[name][hash:8].[ext]"
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import"),
                require("autoprefixer")
              ]
            }
          },
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.min.css" // extracted css file name
    })
  ]
};
