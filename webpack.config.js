import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const devConfig = {
  name: 'dev',
  mode: 'development',
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.jsx', '...'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              ['babel-plugin-add-import-extension', false],
            ],
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  devServer: {
    static: false,
    open: true,
  },
};

const distConfig = {
  name: 'dist',
  mode: 'none',
  entry: './src/index.css',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

export default [devConfig, distConfig];
