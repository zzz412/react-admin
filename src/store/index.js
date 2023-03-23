import { configureStore } from '@reduxjs/toolkit'
import menu from './modules/menu'
import global from './modules/global'

const store = configureStore({
	reducer: { global, menu }
})

export default store
