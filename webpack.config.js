const webpack = require("webpack");

module.exports = {
  experiments: {
    outputModule: true,
  },
  target: "es2020",
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      filename: "remoteEntry.js",
      library: { type: "module" },
      name: "components-lib",
      exposes: {
        "./Lib": "public_apis.ts",
      },
      remotes: {},
    }),
  ],
};
