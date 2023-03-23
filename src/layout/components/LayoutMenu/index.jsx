import { Menu } from 'antd'
import React, { memo, useState } from 'react'
import Logo from './components/Logo'
import { TrophyOutlined } from '@ant-design/icons'
import { MenuWrapper } from './style'

const menu = new Array(20).fill('测试').map((item, index) => {
	return {
		icon: <TrophyOutlined />,
		key: item + index,
		label: item + index,
		children: [
			{
				icon: <TrophyOutlined />,
				key: item + index + '/',
				label: item + index,
				children: [{ icon: <TrophyOutlined />, key: item + index + '//', label: item + index }]
			}
		]
	}
})

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
	const clickMenu = ({ key }) => {
		console.log(key)
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
