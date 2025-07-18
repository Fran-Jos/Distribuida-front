const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    }
  },
  devServer: {
    proxy: {
      '^/api/authors': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api/authors': '/authors' }
      },
      '^/api/books': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api/books': '/books' }
      },
      '^/api/customers': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api/customers': '/customers' }
      }
    }
  }
}
