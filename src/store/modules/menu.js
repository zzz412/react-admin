import { createSlice } from '@reduxjs/toolkit'

const MenuSlice = createSlice({
	name: 'menu',
	initialState: {
		isCollapse: false,
		menuList: [],
		breadcrumbList: []
	},
	reducers: {
		changeCollapse(state, { payload }) {
			state.isCollapse = payload
		},
		setMenuListAction(state, { payload }) {
			state.menuList = payload
		},
		setBreadcrumbList(state, { payload }) {
			state.breadcrumbList = payload
		}
	}
})

export const { changeCollapse, setMenuListAction, setBreadcrumbList } = MenuSlice.actions

export default MenuSlice.reducer
