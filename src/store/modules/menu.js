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
		setMenuList(state, { payload }) {
			state.menuList = payload
		}
	}
})

export const { changeCollapse, setMenuList } = MenuSlice.actions

export default MenuSlice.reducer
