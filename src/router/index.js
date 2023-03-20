import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import NotFound from '@/views/error-page/404'

const routes = [
	{ path: '/', element: <Navigate to='/login' /> },
	{ path: '/login', element: <Login />, meta: { title: '登录页' } },
	{ path: '/404', element: <NotFound />, meta: { title: '404页面' } },
	{ path: '*', element: <Navigate to='/404' /> }
]

const router = createBrowserRouter(routes)

export default router
