module.exports = function() {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presens: ['es2015']
          }
        }
      ]
    }
  }
}
