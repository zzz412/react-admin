import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import NotFound from '@/views/error-page/404'
import Layout from '@/layout/AuthLayout'
import { lazy } from 'react'

export const baseRoutes = [
	{ path: '/', element: <Navigate to='/home' /> },
	{ path: '/login', element: <Login />, meta: { title: '登录页' } },
	{ path: '/404', element: <NotFound />, meta: { title: '404页面' } },
	{ path: '/403', element: <NotFound />, meta: { title: '403页面' } },
	{ path: '/500', element: <NotFound />, meta: { title: '500页面' } }
]

// 需要权限验证的路由 添加meta属性requiresAuth=true
export const asyncRoutes = [
	// 主页
	{
		element: <Layout />,
		children: [{ path: '/home', Component: lazy(() => import('@/views/home')), meta: { title: '主页', requiresAuth: true } }]
	},
	// 用户管理 ->  用户列表
	{
		element: <Layout />,
		meta: { title: '用户管理', requiresAuth: true },
		children: [
			{ path: '/user-manage', element: <Navigate to='/user-manage/user-list' /> },
			{
				path: '/user-manage/user-list',
				Component: lazy(() => import('@/views/user-manage/user-list')),
				meta: { title: '用户列表', requiresAuth: true }
			}
		]
	},
	// 权限管理 ->  角色列表  权限列表
	{
		element: <Layout />,
		meta: { title: '权限管理', requiresAuth: true },
		children: [
			{ path: '/right-manage', element: <Navigate to='/right-manage/role-list' /> },
			{
				path: '/right-manage/role-list',
				Component: lazy(() => import('@/views/role-manage/role-list')),
				meta: { title: '角色列表', requiresAuth: true }
			},
			{
				path: '/right-manage/rights-list',
				Component: lazy(() => import('@/views/role-manage/rights-list')),
				meta: { title: '权限列表', requiresAuth: true }
			}
		]
	},
	// 新闻管理 ->  新闻列表
	{
		element: <Layout />,
		meta: { title: '新闻管理', requiresAuth: true },
		children: [
			{ path: '/news-manage', element: <Navigate to='/news-manage/news-list' /> },
			{
				path: '/news-manage/news-list',
				Component: lazy(() => import('@/views/news-manage/news-list')),
				meta: { title: '新闻列表', requiresAuth: true }
			}
		]
	},
	{ path: '*', element: <Navigate to='/404' /> }
]

const Router = routes => {
	const router = createBrowserRouter(routes, { basename: process.env.PUBLIC_URL })
	return router
}

export default Router
