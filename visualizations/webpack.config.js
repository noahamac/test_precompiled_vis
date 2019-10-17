var path = require("path");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var webpackConfig = {
  mode: 'development',
  entry: {
    spider_chart: "./src/spider_chart/spider_chart_container.js",
    grouped_card: "./src/grouped_card/grouped_card_container.js",
    gauge_chart: "./src/gauge_chart/gauge_chart_container.js",
    calendar_chart: "./src/calendar_visualization/calendar_chart_container.js",  
    multiple_gauge_charts: "./src/multiple_gauge_charts/multiple_gauge_charts_container.js",
    bubble_chart: "./src/bubble_chart/bubble_chart_container.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "../src"), "node_modules"]
  },
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader"},
      { test: /\.css$/, use: ["to-string-loader", "css-loader"] }
    ]
    
  },
  
  stats: {}
};

module.exports = webpackConfig;
