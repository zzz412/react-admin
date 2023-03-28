import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import global from './global'
import menu from './menu'

const reducers = combineReducers({ auth, global, menu })

export default reducers
