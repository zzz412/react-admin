import NProgress from '@/config/nprogress'
import { message } from 'antd'
import axios from 'axios'

class RequestHttp {
	constructor(config) {
		// 实例化axios
		this.service = axios.create(config)

		// 请求拦截器
		this.service.interceptors.request.use(
			config => {
				NProgress.start()
				return config
			},
			error => {
				return Promise.reject(error)
			}
		)

		// 响应拦截器
		this.service.interceptors.response.use(
			res => {
				const { data } = res
				NProgress.done()
				// * 错误信息拦截 【没有code 或者 code不为200】
				if (data.code && data.code !== 200) {
					message.error(data.msg)
					return Promise.reject(data)
				}
				// * 成功请求
				return data
			},
			error => {
				// const { response } = error
				NProgress.done()
				// 请求超时单独判断，请求超时没有 response
				if (error.message.indexOf('timeout') !== -1) message.error('请求超时，请稍后再试')
				// 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
				if (!window.navigator.onLine) window.location.hash = '/500'
				return Promise.reject(error)
			}
		)
	}

	get(url, params, config) {
		return this.service.get(url, { params, ...config })
	}

	post(url, params, config) {
		return this.service.post(url, params, config)
	}

	put(url, params, config) {
		return this.service.put(url, params, config)
	}

	delete(url, params, config) {
		return this.service.delete(url, { params, ...config })
	}

	patch(url, params, config) {
		return this.service.patch(url, params, config)
	}
}

export default RequestHttp
