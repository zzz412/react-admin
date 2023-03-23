import { Menu } from 'antd'
import React, { memo, useState } from 'react'
import Logo from './components/Logo'
import { HomeOutlined, MenuOutlined, ProfileOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
import { MenuWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const menu = [
	{
		key: '/home',
		label: '首页',
		icon: <HomeOutlined />
	},
	{
		key: '/user-manage',
		label: '用户管理',
		icon: <UserOutlined />,
		children: [
			{
				key: '/user-manage/user-list',
				label: '用户列表',
				icon: <UnorderedListOutlined />
			}
		]
	},
	{
		key: '/role-manage',
		label: '权限管理',
		icon: <MenuOutlined />,
		children: [
			{
				key: '/role-manage/role-list',
				label: '角色列表',
				icon: <UnorderedListOutlined />
			},
			{
				key: '/role-manage/rights-list',
				label: '权限列表',
				icon: <UnorderedListOutlined />
			}
		]
	},
	{
		key: '/news-manage',
		label: '新闻管理',
		icon: <ProfileOutlined />,
		children: [
			{
				key: '/news-manage/news-list',
				label: '新闻列表',
				icon: <UnorderedListOutlined />
			}
		]
	}
]

const LayoutMenu = memo(() => {
	const [menuList, setMenuList] = useState(menu)
	const [openKeys, setOpenKeys] = useState([])

	// 设置当前展开的 subMenu
	const onOpenChange = openKeys => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys)
		const lastOpenKey = openKeys[openKeys.length - 1]
		if (lastOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
		setOpenKeys([lastOpenKey])
	}

	// 点击菜单跳转页面
	const navigate = useNavigate()
	const clickMenu = ({ key }) => {
		navigate(key)
	}

	return (
		<MenuWrapper>
			<Logo />
			<Menu
				theme='dark'
				mode='inline'
				triggerSubMenuAction='click'
				items={menuList}
				openKeys={openKeys}
				onClick={clickMenu}
				onOpenChange={onOpenChange}
			></Menu>
		</MenuWrapper>
	)
})

LayoutMenu.displayName = 'LayoutMenu'

export default LayoutMenu
