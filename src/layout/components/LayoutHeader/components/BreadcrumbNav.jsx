import { Breadcrumb } from 'antd'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbNav = memo(() => {
	const items = [
		{ title: <Link to='/'>首页</Link>, key: 'home' },
		{ title: <Link to='/'>测试</Link>, key: 'test' }
	]

	return <Breadcrumb items={items}></Breadcrumb>
})

export default BreadcrumbNav
