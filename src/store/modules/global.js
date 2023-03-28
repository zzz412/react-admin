import { createSlice } from '@reduxjs/toolkit'

const GLobalSlice = createSlice({
	name: 'global',
	initialState: {
		token: '',
		userinfo: '',
		language: 'zh',
		assemblySize: 'middle',
		themeConfig: {
			// 默认主题颜色
			primary: '#1890ff',
			// 深色模式
			isDark: false,
			// 面包屑导航
			breadcrumb: true,
			// 页脚
			footer: true
		}
	},
	reducers: {
		setToken(state, { payload }) {
			state.token = payload
		},
		setUserinfo(state, { payload }) {
			state.userinfo = payload
		},
		setAssemblySize(state, { payload }) {
			state.assemblySize = payload
		},
		setLanguage(state, { payload }) {
			state.language = payload
		},
		setThemeConfig(state, { payload }) {
			state.themeConfig = { ...state.themeConfig, ...payload }
		}
	}
})

export const { setToken, setUserinfo, setAssemblySize, setLanguage, setThemeConfig, test } = GLobalSlice.actions

export default GLobalSlice.reducer
