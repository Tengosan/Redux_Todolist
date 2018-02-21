const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "http://localhost:9090/"
  },
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader'
      }]
    },{
      test: /\.css?$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      },{
        loader: "postcss-loader"
      }]
    },{
      test: /\.scss?$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader:"file-loader",
      query:{
        name:'[name].[ext]',
        outputPath:'images/'
      }
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader",
      query:{
        limit:'10000',
        name:'[name].[ext]',
        outputPath:'fonts/'
      }
    }]
  },
  resolve: {
    alias: {
      'Actions': path.resolve(__dirname, 'src/actions/'),
      'Api': path.resolve(__dirname, 'src/api/'),
      'Constants': path.resolve(__dirname, 'src/constants/'),
      'Components': path.resolve(__dirname, 'src/components/'),
      'CommonColors': path.resolve(__dirname, 'src/components/common/colors.scss'),
      'FontAwesome': path.resolve(__dirname, 'src/components/common/font-awesome.scss'),
      'Proptypes': path.resolve(__dirname, 'src/proptypes/'),
      'Reducers': path.resolve(__dirname, 'src/reducers/'),
      'Sagas': path.resolve(__dirname, 'src/sagas/'),
      'Selectors': path.resolve(__dirname, 'src/selectors/'),
      'Utils': path.resolve(__dirname, 'src/utils/'),
    },
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  }
};
