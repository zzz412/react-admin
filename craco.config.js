const path = require('path')
require('dotenv').config()

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = function ({ env }) {
  return {
    devServer: {
      port: process.env.REACT_APP_PORT,
			open: process.env.REACT_APP_OPEN,
    },
    webpack: {
      alias: {
        '@': resolve('src'),
        '@c': resolve('src/components'),
        '@u': resolve('src/utils'),
      },
    },
  }
}
