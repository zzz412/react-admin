// * 检查是否有权限
export const checkPagePermission = (item, rights) => item.key !== '/login' && rights.includes(item.key) && item.pagePermission

/**
 * 根据权限递归处理menu列表  【被权限筛选后的路由列表】
 */
export const filterMenuList = (menuList, rights) => {
	const newArr = []
	menuList.forEach(item => {
		// 是否为页面级权限
		if (checkPagePermission(item, rights)) {
			// 无子级
			if (!item?.children?.length) return newArr.push(item)
			// 有子级
			newArr.push({ ...item, children: filterMenuList(item.children, rights) })
		}
	})
	return newArr
}

/**
 * 获取需要展开的 subMenu
 */
export const getOpenKeys = path => {
	let newStr = ''
	let newArr = []
	let arr = path.split('/').map(i => '/' + i)
	for (let i = 1; i < arr.length - 1; i++) {
		newStr += arr[i]
		newArr.push(newStr)
	}
	return newArr
}

/**
 * 递归查询对应路由【根据path获取route配置项】
 */
export const searchRoute = (path, routes) => {
	let result = {}
	for (let item of routes) {
		if (item.path === path) return item
		if (item.children) {
			const res = searchRoute(path, item.children)
			if (Object.keys(res).length) result = res
		}
	}
	return result
}

/**
 * 根据权限路由映射路由表信息
 */
export const hasPermission = (route, rights) => {
	if (route.meta?.requiresAuth && route.path) {
		return rights.includes(route.path)
	}
	return true
}

export const filterRouteList = (routes, rights) => {
	let newArr = []
	routes.forEach(route => {
		const item = { ...route }
		if (hasPermission(item, rights)) {
			if (item.children) {
				item.children = filterRouteList(item.children, rights)
			}
			newArr.push(item)
		}
	})
	return newArr
}

/**
 * 筛选所有最低级菜单生成面包屑导航
 */
export const findAllBreadcrumb = menuList => {
	const handleBreadcrumbList = {}
	const loop = item => {
		if (item?.children?.length) item.children.forEach(loop)
		else {
			handleBreadcrumbList[item.key] = getBreadcrumbList(item.key, menuList)
		}
	}
	menuList.forEach(loop)
	return handleBreadcrumbList
}

export const getBreadcrumbList = (key, menuList) => {
	const matchMenu = menuList.find(menu => key.includes(menu.key))
	function deepChildren(menu, arr = []) {
		arr.push({ key: menu.key, label: menu.label })
		if (menu.children?.length) {
			menu.children.forEach(item => deepChildren(item, arr))
		}
		return arr
	}
	return deepChildren(matchMenu)
		.filter(item => key.includes(item.key))
		.map(item => item.label)
}
