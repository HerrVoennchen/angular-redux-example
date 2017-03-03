var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');
module.exports = {
  context: __dirname,
  devtool: debug ? 'source-map' : null,
  entry: {
    app: ['./src/js/app.js'],
  },
  output: {
    path: __dirname,
    filename: 'app.bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.html', '.scss']
  }  ,
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: { 
        presets: ['es2015', 'es2016', 'es2017', 'stage-3'],
        plugins: ['transform-decorators-legacy', 'transform-class-properties'],
      },
      include: [
      path.resolve(__dirname, "src")
      ],
      exclude: [/node_modules/]
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: 'css-loader?importLoaders=1'
      })
    },
    {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'url-loader'
    },
    {
      test: /\.html?$/,
      loader: 'html-loader'
    }]
  },
  /*eslint: {
    failOnWarning: false,
    failOnError: true
  },*/
  plugins: debug ? [
  new ExtractTextPlugin({
    filename: 'app.bundle.css',
    allChunks: true
  }),
  new WatchLiveReloadPlugin({
    files: [
    './src/**/*.html',
    './src/**/*.css'
    ]
  })
  ] : [
  new ExtractTextPlugin({
    filename: 'app.bundle.css',
    allChunks: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    compress: {
      warnings: false,
    }
  })
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize: true, compress: { warnings: false } }),
    ],
    devServer: {
      contentBase: "src",
      proxy: [{
        context: '/esapi',
        target: 'http://localhost:8090',
        secure: false
      }]
    },
  };