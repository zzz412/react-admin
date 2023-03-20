import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

const App = memo(() => {
	return (
		<ConfigProvider locale={zhCN}>
			<RouterProvider router={router} />
		</ConfigProvider>
	)
})

export default App
