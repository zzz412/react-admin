import RequestHttp from '@/utils/request'

const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: process.env.REACT_APP_API_URL,
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候是否允许携带凭证
	withCredentials: false
}

const http = new RequestHttp(config)

export default http
