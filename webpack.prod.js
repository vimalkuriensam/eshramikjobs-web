const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) => {
  const fileEnv = dotenv.config({
    path: path.join(__dirname, `/src/environment/.env.${env}`),
  }).parsed;
  // const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
  //   return prev;
  // }, {});
  const envKeys = {
    "process.env": {
      BASE_URL: JSON.stringify(process.env.BASE_URL),
      RAZORPAY_ID: JSON.stringify(process.env.RAZORPAY_ID),
    },
  };
  console.log(envKeys);
  return merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [new webpack.DefinePlugin(envKeys)],
  });
};
