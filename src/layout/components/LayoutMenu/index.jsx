import { Menu } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import Logo from './components/Logo'
import { MenuWrapper } from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import { menuListApi } from '@/api/modules/user'
import * as Icons from '@ant-design/icons'
import { filterMenuList, getOpenKeys, handleRouter } from '@/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuListAction } from '@/store/modules/menu'
import { setAuthRouter } from '@/store/modules/auth'

const LayoutMenu = memo(() => {
	const { pathname } = useLocation()
	const [menuList, setMenuList] = useState([])
	const [openKeys, setOpenKeys] = useState([])
	const [selectedKeys, setSelectedKeys] = useState([pathname])
	const { role } = useSelector(({ global }) => global.userinfo)
	const isCollapse = useSelector(({ menu }) => menu.isCollapse)

	useEffect(() => {
		setSelectedKeys([pathname])
		!isCollapse && setOpenKeys(getOpenKeys(pathname))
	}, [pathname, isCollapse])

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

	// 生成MenuItem
	const menuItem = (label, key, icon, children) => ({ label, key, icon, children })
	// 生成Icon图标
	const iconItem = name => name && React.createElement(Icons[name])
	// 处理后台返回数据匹配菜单key
	const deepLoopFloat = menuList => {
		const newArr = []
		menuList.forEach(item => {
			// 无子级
			if (!item?.children?.length) return newArr.push(menuItem(item.title, item.key, iconItem(item.icon)))
			// 有子级
			newArr.push(menuItem(item.title, item.key, iconItem(item.icon), deepLoopFloat(item.children)))
		})
		return newArr
	}

	// 获取菜单列表并处理成 antd menu 需要的格式
	const dispatch = useDispatch()
	const getMenuData = async () => {
		const { data } = await menuListApi()
		if (!data) return
		// 1. 根据用户权限筛选列表
		const filterData = filterMenuList(data, role.rights)
		// 2. 处理筛选后的列表 -> 路由权限判断
		const dynamicRouter = handleRouter(filterData)
		// 3. 映射 -> menu菜单格式
		const menuData = deepLoopFloat(filterData)
		// 4. 设置到菜单上
		setMenuList(menuData)
		// 4. 设置到redux中
		dispatch(setAuthRouter(dynamicRouter))
		dispatch(setMenuListAction(filterData))
	}

	useEffect(() => {
		getMenuData()
	}, [])

	return (
		<MenuWrapper>
			<Logo />
			<Menu
				theme='dark'
				mode='inline'
				triggerSubMenuAction='click'
				items={menuList}
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				onClick={clickMenu}
				onOpenChange={onOpenChange}
			></Menu>
		</MenuWrapper>
	)
})

LayoutMenu.displayName = 'LayoutMenu'

export default LayoutMenu
