/*module.exports = {
  devServer: {
    proxy : {
      '/api': {
        target: 'http://localhost:8080',
      }
    }
  }
}*/

module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  } }
