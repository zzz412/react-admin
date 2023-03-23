import React, { memo } from 'react'
import { Layout } from 'antd'
import { LayoutWrapper } from './style'
import LayoutMenu from './components/LayoutMenu'
import LayoutHeader from './components/LayoutHeader'
import { Outlet } from 'react-router-dom'
import LayoutFooter from './components/LayoutFooter'
import { shallowEqual, useSelector } from 'react-redux'

const LayoutIndex = memo(() => {
	const { Sider, Content } = Layout
	const { isCollapse } = useSelector(({ menu }) => ({ isCollapse: menu.isCollapse }), shallowEqual)

	return (
		<LayoutWrapper className='container'>
			<Layout hasSider>
				<Sider trigger={null} collapsed={isCollapse} width={220} theme='dark'>
					<LayoutMenu></LayoutMenu>
				</Sider>
				<Layout>
					<LayoutHeader></LayoutHeader>
					<Content>
						<Outlet></Outlet>
					</Content>
					<LayoutFooter></LayoutFooter>
				</Layout>
			</Layout>
		</LayoutWrapper>
	)
})

LayoutIndex.displayName = 'Layout'

export default LayoutIndex
