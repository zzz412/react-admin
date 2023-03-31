import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AppProvider } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import Router, { baseRoutes, asyncRoutes } from '@/router'
import zhCN from 'antd/lib/locale/zh_CN'
import useTheme from './hooks/useTheme'
import useAuthRoutes from './hooks/useAuthRoues'
import { Suspense } from 'react'
import Loading from './components/Loading'

const App = memo(() => {
	const { assemblySize, themeConfig } = useSelector(({ global }) => global, shallowEqual)

	const themes = useTheme(themeConfig)
	const routeList = useAuthRoutes(baseRoutes, asyncRoutes)

	return (
		<ConfigProvider theme={themes} locale={zhCN} componentSize={assemblySize}>
			<AppProvider>
				<Suspense fallback={<Loading />}>
					<RouterProvider router={Router(routeList)} />
				</Suspense>
			</AppProvider>
		</ConfigProvider>
	)
})

export default App
