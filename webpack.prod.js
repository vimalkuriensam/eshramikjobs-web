const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) => {
  const fileEnv = dotenv.config({
    path: path.join(__dirname, `/src/environment/.env.${env}`),
  }).parsed;
  const envKeys = {
    "process.env": Object.keys(fileEnv).reduce((key, value) => {
      key[`${value}`] = JSON.stringify(process.env[value]);
      return key;
    }, {}),
  };
  return merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [new webpack.DefinePlugin(envKeys)],
  });
};
