import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import NotFound from '@/views/error-page/404'
import Layout from '@/layout'

import Home from '@/views/home'
import UserList from '@/views/user-manage/user-list'
import RoleList from '@/views/role-manage/role-list'
import RightsList from '@/views/role-manage/rights-list'
import NewsList from '@/views/news-manage/news-list'

const routes = [
	{ path: '/', element: <Navigate to='/home' /> },
	{ path: '/login', element: <Login />, meta: { title: '登录页' } },
	// 主页
	{
		element: <Layout />,
		children: [{ path: '/home', element: <Home /> }]
	},
	// 用户管理 ->  用户列表
	{
		element: <Layout />,
		meta: { title: '用户管理' },
		children: [
			{ path: '/user-manage', element: <Navigate to='/user-manage/user-list' /> },
			{ path: '/user-manage/user-list', element: <UserList />, meta: { title: '用户列表' } }
		]
	},
	// 权限管理 ->  角色列表  权限列表
	{
		element: <Layout />,
		meta: { title: '权限管理' },
		children: [
			{ path: '/right-manage', element: <Navigate to='/right-manage/role-list' /> },
			{ path: '/right-manage/role-list', element: <RoleList />, meta: { title: '角色列表' } },
			{ path: '/right-manage/rights-list', element: <RightsList />, meta: { title: '权限列表' } }
		]
	},
	// 新闻管理 ->  新闻列表
	{
		element: <Layout />,
		meta: { title: '新闻管理' },
		children: [
			{ path: '/news-manage', element: <Navigate to='/news-manage/news-list' /> },
			{ path: '/news-manage/news-list', element: <NewsList />, meta: { title: '新闻列表' } }
		]
	},
	{ path: '/404', element: <NotFound />, meta: { title: '404页面' } },
	{ path: '*', element: <Navigate to='/404' /> }
]

const router = createBrowserRouter(routes, { basename: process.env.PUBLIC_URL })

export default router
