const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  // bundling mode
  mode: 'production',
  watch: true,
  // entry files
  entry: './src/index.ts',
  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // file resolutions
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    //   {
    //     test: /\.txt$/i,
    //     use: 'raw-loader',
    //   },
    ],
  },
  // plugins
  plugins: [
    // copy .txt files from src to dist
    new CopyPlugin({
        patterns: [{ from: 'src/**/*.txt',  to:path.resolve(__dirname, 'dist', '[name][ext]'), }],
    }),
  ],
};