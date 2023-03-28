import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AppProvider } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import router from '@/router'
import zhCN from 'antd/lib/locale/zh_CN'
import useTheme from './hooks/useTheme'

const App = memo(() => {
	const { assemblySize, themeConfig } = useSelector(({ global }) => global, shallowEqual)

	const themes = useTheme(themeConfig)

	return (
		<ConfigProvider theme={themes} locale={zhCN} componentSize={assemblySize}>
			<AppProvider>
				<RouterProvider router={router} />
			</AppProvider>
		</ConfigProvider>
	)
})

export default App
