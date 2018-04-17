var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
App: "./app/assets/scripts/App.js",
Vendor: "./app/assets/scripts/Vendor.js"
},
  output: {
    path: path.resolve(__dirname,"./app/dist/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
