const path = require('path');

module.exports = {
  entry: {
    Share: './src/Share.js',
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};