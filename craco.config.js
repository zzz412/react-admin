const path = require('path')
require('dotenv').config()

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
	devServer: {
		port: process.env.REACT_APP_PORT,
		// 本地服务的响应头设置
		headers: {
			// 允许跨域
			'Access-Control-Allow-Origin': '*'
		}
	},
	webpack: {
		alias: {
			'@': resolve('src'),
			'@c': resolve('src/components'),
			'@u': resolve('src/utils')
		},
		configure(webpackConfig) {
			// 配置扩展扩展名
			webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css']]
			// 配置公共路径
			webpackConfig.output.publicPath = process.env.PUBLIC_URL
			return webpackConfig
		}
	}
}
