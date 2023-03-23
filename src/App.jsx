import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { shallowEqual, useSelector } from 'react-redux'

const App = memo(() => {
	const { assemblySize } = useSelector(({ global }) => global, shallowEqual)

	return (
		<ConfigProvider locale={zhCN} componentSize={assemblySize}>
			<RouterProvider router={router} />
		</ConfigProvider>
	)
})

export default App
