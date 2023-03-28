import { Breadcrumb } from 'antd'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BreadcrumbNav = memo(() => {
	const isShow = useSelector(({ global }) => global.themeConfig.breadcrumb)

	const items = [
		{ title: <Link to='/'>首页</Link>, key: 'home' },
		{ title: <Link to='/'>测试</Link>, key: 'test' }
	]

	return <>{isShow && <Breadcrumb items={items}></Breadcrumb>}</>
})

export default BreadcrumbNav
