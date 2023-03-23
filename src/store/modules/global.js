import { createSlice } from '@reduxjs/toolkit'

const GLobalSlice = createSlice({
	name: 'global',
	initialState: {
		token: '',
		userInfo: '',
		language: 'zh',
		assemblySize: 'middle'
	},
	reducers: {
		setAssemblySize(state, { payload }) {
			state.assemblySize = payload
		},
		setLanguage(state, { payload }) {
			state.language = payload
		}
	}
})

export const { setAssemblySize, setLanguage } = GLobalSlice.actions

export default GLobalSlice.reducer
