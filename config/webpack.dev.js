const path = require("path");

const webpack = require("webpack");
const dotenv = require("dotenv");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) => {
  const fileEnv = dotenv.config({
    path: path.join(__dirname, "..", `/src/environment/.env.${env}`),
  }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  return merge(common, {
    mode: "development",
    devtool: "inline-cheap-source-map",
    devServer: {
      contentBase: path.join(__dirname, "..", "public"),
      publicPath: "/dist/",
      // http2:true,
      // https: {
      //   cert: "",
      //   key: "",
      // },
      compress: true,
      port: 4200,
      historyApiFallback: true,
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  });
};
