const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    secondary: './src/Share.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    module: true,
    publicPath: '/path/to/bundled/files/', // Move publicPath inside output
  },
  experiments: {
    outputModule: true,
  },
};
