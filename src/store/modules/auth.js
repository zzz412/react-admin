import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
	name: 'auth',
	initialState: {
		authRouter: [],
		authButtons: []
	},
	reducers: {
		setAuthRouter(state, { payload }) {
			state.authRouter = payload
		},
		setAuthButtons(state, { payload }) {
			state.authButtons = payload
		}
	}
})

export const { setAuthRouter, setAuthButtons } = AuthSlice.actions

export default AuthSlice.reducer
