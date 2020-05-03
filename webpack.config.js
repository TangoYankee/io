const path = require('path')
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
// const CssUrlRelativePlugin = require('css-url-relative-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  output: {
    publicPath: './dist/'
  },

  resolve: {
    extensions: ['.ts', '.tsx'],
    modules: [
      path.resolve(__dirname, 'src')
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
        test: /\.(png|svg|jpg|gif)$/,
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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
