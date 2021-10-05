const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browseslist"
}

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true
  }
}
