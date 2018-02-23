var copyPlugin = require('copy-webpack-plugin')

module.exports = function() {
  return {
    plugin: [
      new copyPlugin([
        { from: 'assets', to: 'assets' }
      ])
    ]
  }
}
