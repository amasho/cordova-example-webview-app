import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const JS_RESOURCE_PATH = 'src/js'
const CSS_RESOURCE_PATH = 'src/css'

export default [{
  name: 'js build',
  cache: false,
  devtool: (process.env.NODE_ENV === 'staging') ? 'inline-source-map' : '',
  target: 'web',

  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules']
  },

  entry: {
    main: path.join(__dirname, JS_RESOURCE_PATH, 'index')
  },

  output: {
    path: path.join(__dirname, 'www', 'assets', 'js'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/js/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}, {
  name: 'css build',
  cache: (process.env.NODE_ENV === 'staging') ? true : false,
  devtool: (process.env.NODE_ENV === 'staging') ? 'inline-source-map' : '',
  target: 'web',

  resolve: {
    extensions: ['.css', '.scss'],
    modules: ['src', 'node_modules']
  },

  entry: {
    styles: path.join(__dirname, CSS_RESOURCE_PATH, 'index')
  },

  output: {
    path: path.join(__dirname, 'www', 'assets', 'css'),
    filename: '[name].css',
    publicPath: '/css/'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                camelCase: false,
                importLoaders: 1,
                minimize: true,
                discardComments: { removeAll: true },
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  const config = [
                    require('postcss-import')({ addDependencyTo: webpack }),
                    require('precss'),
                    require('postcss-cssnext')({
                      features: {
                        autoprefixer: { remove: false },
                      },
                    }),
                  ]
                  return config
                }
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    })
  ]
}]

