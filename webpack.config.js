const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./assets/js/main.js', './assets/css/main.css'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public', 'build'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
        {
            // Apply rule for .js
            test: /\.js$/,
            exclude: /(node_modules)/,// Set loaders to transform files.
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            // Apply rule for .css files
            test: /\.css$/i,
            include: path.resolve(__dirname, 'assets', 'css'),
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: '[id].css'
    }),
  ],
};