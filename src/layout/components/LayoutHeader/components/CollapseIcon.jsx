import { changeCollapse } from '@/store/modules/menu'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const CollapseIcon = memo(() => {
	const { isCollapse } = useSelector(({ menu }) => ({ isCollapse: menu.isCollapse }), shallowEqual)
	const dispatch = useDispatch()

	return (
		<div className='collapsed' onClick={() => dispatch(changeCollapse(!isCollapse))}>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	)
})

export default CollapseIcon
