// * 用户模块
import http from '..'

// 用户登录
export const loginApi = params => http.get('/login', params)

// 获取菜单列表
export const menuListApi = () => http.get('/rights')
