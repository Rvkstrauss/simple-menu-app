const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const {
  CheckerPlugin,
  TsConfigPathsPlugin
} = require('awesome-typescript-loader');

const configFileName = path.resolve(__dirname, './apps/server/tsconfig.json');

const copies = [
  { from: path.join(__dirname, './apps/server/assets'), to: 'assets' }
];

module.exports = {
  externals: [nodeExternals()],
  target: 'node',
  devtool: 'source-map',
  entry: {
    www: './apps/server/bin/www.ts'
  },
  node: {
    __dirname: false
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [new CopyWebpackPlugin([...copies]), new CheckerPlugin()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsConfigPathsPlugin({ configFileName })]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          configFileName,
          useBabel: true,
          babelOptions: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { node: true, esmodules: true }, modules: false }
              ]
            ]
          },
          babelCore: '@babel/core'
        }
      }
    ]
  }
};
