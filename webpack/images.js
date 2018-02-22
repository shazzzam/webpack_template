module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|svg|png)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      ]
    }
  }
}
