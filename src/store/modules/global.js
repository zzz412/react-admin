import { createSlice } from '@reduxjs/toolkit'

const GLobalSlice = createSlice({
	name: 'global',
	initialState: {
		token: '',
		userInfo: '',
		language: 'zh',
		assemblySize: 'middle',
		themeConfig: {
			// 默认主题颜色
			primary: '#1890ff',
			// 深色模式
			isDark: false
		}
	},
	reducers: {
		setAssemblySize(state, { payload }) {
			state.assemblySize = payload
		},
		setLanguage(state, { payload }) {
			state.language = payload
		},
		setThemeConfig(state, { payload }) {
			state.themeConfig = payload
		}
	}
})

export const { setAssemblySize, setLanguage, setThemeConfig } = GLobalSlice.actions

export default GLobalSlice.reducer
