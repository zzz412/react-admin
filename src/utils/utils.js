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
 * 递归出路由表 【用于后续路由权限验证】
 */
export const handleRouter = (routerList, newArr = []) => {
	routerList.forEach(item => {
		typeof item === 'object' && item.key && newArr.push(item.key)
		item.children && item.children.length && handleRouter(item.children, newArr)
	})
	return newArr
}

/**
 *获取需要展开的 subMenu
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
