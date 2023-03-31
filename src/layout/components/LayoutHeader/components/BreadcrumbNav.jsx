import { Breadcrumb } from 'antd'
import React, { memo } from 'react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const BreadcrumbNav = memo(() => {
	const { pathname } = useLocation()
	const isShow = useSelector(({ global }) => global.themeConfig.breadcrumb)
	const breadcrumbList = useSelector(({ menu }) => menu.breadcrumbList[pathname])

	const items = useMemo(() => {
		const list = breadcrumbList.map(item => ({ title: item !== '首页' ? item : null }))
		list.unshift({ title: <Link to='/home'>首页</Link> })
		return list
	}, [breadcrumbList])

	return <>{isShow && <Breadcrumb items={items}></Breadcrumb>}</>
})

export default BreadcrumbNav
