module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader" }
    ]
  },
  devServer: {
    publicPath: "/dist/",
    compress: true,
    port: 8080
  }
};