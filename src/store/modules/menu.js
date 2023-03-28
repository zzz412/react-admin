import { createSlice } from '@reduxjs/toolkit'

const MenuSlice = createSlice({
	name: 'menu',
	initialState: {
		isCollapse: false,
		menuList: []
	},
	reducers: {
		changeCollapse(state, { payload }) {
			state.isCollapse = payload
		},
		setMenuListAction(state, { payload }) {
			state.menuList = payload
		}
	}
})

export const { changeCollapse, setMenuListAction } = MenuSlice.actions

export default MenuSlice.reducer
