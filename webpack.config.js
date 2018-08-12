const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const sourcePath = path.join(__dirname, 'src');

module.exports = {
  entry: path.join(sourcePath, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: dist,
  },
  resolve: {
    alias: {}
  },
  devtool: 'source-map',
  mode: 'development'
};

