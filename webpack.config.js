const path = require('path');

module.exports = {
  entry: './src/browser/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'nodeum-sdk.js',
    library: 'NodeumSdk',
    path: path.resolve(__dirname, 'dist')
  }
};
