var path = require('path')

var config = {
  devtool: 'eval-source-map',
  entry: [
    'src/js/upload.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'upload.js',
    publicPath: '/',
    libraryTarget: 'var',
    library: 'Upload'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      styles: 'src/scss/main.scss',
      upload: 'src/js/upload.js'
    },
    extensions: ['', '.js']
  }
}

module.exports = config
