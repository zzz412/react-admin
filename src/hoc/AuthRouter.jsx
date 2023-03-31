import { routes } from '@/hooks/useAuthRoues'
import store from '@/store'
import { searchRoute } from '@/utils/utils'
import React, { memo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AuthRouter = memo(({ children }) => {
	const { pathname } = useLocation()

	const route = searchRoute(pathname, routes)

	// * 判断当前路由是否需要权限（不需要直接放行）
	if (!route?.meta?.requiresAuth) return children

	// * 判断是否有Token
	const token = store.getState().global.token
	if (!token) return <Navigate to='/login' replace />

	// // * 动态路由（当前用户的能访问的路由）
	// const dynamicRouter = store.getState().auth.authRouter
	// // * 静态路由（静态路由【默认的页面】）
	// const stateRouter = ['/home']
	// const routerList = dynamicRouter.concat(stateRouter)
	// // * 判断访问地址是否在路由表中
	// if (!routerList.includes(pathname)) return <Navigate to='/404' />

	// * 当前账号有权限 正常访问页面
	return children
})

AuthRouter.displayName = 'AuthRouter'

export default AuthRouter
