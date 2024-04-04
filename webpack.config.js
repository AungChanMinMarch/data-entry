const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};