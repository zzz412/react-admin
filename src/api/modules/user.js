// * 用户模块
import http from '..'

// 用户登录
export const loginApi = params => http.get('/login', params)

// 获取菜单列表
export const menuListApi = () => http.get('/rights')

// 获取用户列表
export const userListApi = () => http.get('/users', { _expand: 'role' })

// 修改用户状态
export const userStateApi = (id, state) => http.patch(`/users/${id}`, { roleState: state })

// 获取区域列表
export const regionsListApi = () => http.get(`/regions`)

// 获取角色列表
export const roleListApi = () => http.get(`/roles`)

// 新增用户
export const addUserApi = value => http.post('/users', { ...value, roleState: true, default: false })

// 更新用户
export const updateUserApi = (id, value) => http.patch(`/users/${id}`, value)

// 删除用户
export const removeUserApi = id => http.delete(`/users/${id}`)
