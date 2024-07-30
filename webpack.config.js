const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              require('react-refresh/babel')
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    hot: true,
  },
};
