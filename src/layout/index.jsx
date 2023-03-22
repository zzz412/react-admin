import React, { memo } from 'react'
import { Layout } from 'antd'
import { LayoutWrapper } from './style'
import LayoutMenu from './components/LayoutMenu'
import LayoutHeader from './components/LayoutHeader'
import { Outlet } from 'react-router-dom'
import LayoutFooter from './components/LayoutFooter'

const LayoutIndex = memo(() => {
	const { Sider, Content } = Layout
	return (
		<LayoutWrapper className='container'>
			<Layout hasSider>
				<Sider trigger={null} collapsed={false} width={220} theme='dark'>
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
