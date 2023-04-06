import React, { memo, useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AppProvider } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Router, { baseRoutes, asyncRoutes } from '@/router'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import useTheme from './hooks/useTheme'
import useAuthRoutes from './hooks/useAuthRoues'
import { Suspense } from 'react'
import Loading from './components/Loading'
import { setLanguage } from '@/store/modules/global'
import i18next from 'i18next'

const App = memo(() => {
	const { assemblySize, themeConfig, language } = useSelector(({ global }) => global, shallowEqual)
	const [i18nLocale, setI18nLocale] = useState(zhCN)

	const themes = useTheme(themeConfig)
	const routeList = useAuthRoutes(baseRoutes, asyncRoutes)

	// 设置 antd 语言国际化
	const setAntdLanguage = () => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (language && language === 'zh') return setI18nLocale(zhCN)
		if (language && language === 'en') return setI18nLocale(enUS)
	}
	const dispatch = useDispatch()
	useEffect(() => {
		i18next.changeLanguage(language)
		dispatch(setLanguage(language))
		setAntdLanguage()
	}, [language])

	return (
		<ConfigProvider theme={themes} locale={i18nLocale} componentSize={assemblySize}>
			<AppProvider>
				<Suspense fallback={<Loading />}>
					<RouterProvider router={Router(routeList)} />
				</Suspense>
			</AppProvider>
		</ConfigProvider>
	)
})

export default App
