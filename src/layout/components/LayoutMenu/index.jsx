import { Menu, Spin } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import Logo from './components/Logo'
import { MenuWrapper } from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import { menuListApi } from '@/api/modules/user'
import * as Icons from '@ant-design/icons'
import { filterMenuList, findAllBreadcrumb, getOpenKeys, searchRoute } from '@/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setBreadcrumbList, setMenuListAction } from '@/store/modules/menu'

const LayoutMenu = memo(() => {
	const { pathname } = useLocation()
	const [selectedKeys, setSelectedKeys] = useState([pathname])
	const isCollapse = useSelector(({ menu }) => menu.isCollapse)

	const [openKeys, setOpenKeys] = useState([])
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
		const route = searchRoute(pathname, menuList)
		if (route.isLink) window.open(route.isLink, '_blank')
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
	const [menuList, setMenuList] = useState([])
	const [loading, setLoading] = useState(false)
	const { role } = useSelector(({ global }) => global.userinfo)
	const getMenuData = async () => {
		setLoading(true)
		try {
			const { data } = await menuListApi()
			if (!data) return
			// 1. 根据用户权限筛选列表
			const filterData = filterMenuList(data, role.rights)
			// 3. 映射 -> menu菜单格式
			const menuData = deepLoopFloat(filterData)
			// 4. 设置到菜单上
			setMenuList(menuData)
			// 5. 设置到面包屑中
			dispatch(setBreadcrumbList(findAllBreadcrumb(menuData)))
			// 5. 设置到redux中
			dispatch(setMenuListAction(filterData))
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getMenuData()
	}, [])

	return (
		<MenuWrapper>
			<Spin spinning={loading} tip='loading...'>
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
			</Spin>
		</MenuWrapper>
	)
})

LayoutMenu.displayName = 'LayoutMenu'

export default LayoutMenu
