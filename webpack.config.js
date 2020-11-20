const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
};
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const cssLoader = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader'
    ];
    if (extra) {
        loaders.push(extra)
    }
    return loaders
};

module.exports = {
  entry: {
      main: ['@babel/polyfill','./src/index.js'],
      analytics: './src/analytics.js'
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.js'],
      alias:{
          '@modules': path.resolve(__dirname, 'src/modules')
      }
  },
  optimization: optimization(),
  devServer: {
      port: 4200,
      hot: isDev
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoader()
      },
      {
        test: /\.(scss|sass)$/,
        use: cssLoader('sass-loader')
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:[
            '@babel/preset-env'
          ]
        }
      },
    ],
  },
};