const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

// const dotenv = require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  devServer: {
    contentBase: "./dist",
    port: "3001",
    host: "localhost",
    historyApiFallback: true,
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_container",
      remotes: {
        component_library: "component_library@http://webpack-component-library.s3-website-eu-west-1.amazonaws.com/remoteEntry.js",
        bankAccount: "bankAccount@http://app-bank-account.s3-website-eu-west-1.amazonaws.com/remoteEntry.js",
        signIn: "signIn@http://app-micro-login.s3-website-eu-west-1.amazonaws.com/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new Dotenv(),
  ],
};
