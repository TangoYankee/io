const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  devtool: 'source-map',

  entry: path.join(__dirname, 'src/index.tsx'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'src/img/logo36.ico'),
      minify: false
    })
  ]
}
