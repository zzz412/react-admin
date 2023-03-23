import React, { memo } from 'react'
import logo from '@/assets/images/logo.png'
import { shallowEqual, useSelector } from 'react-redux'

const Logo = memo(() => {
	const { isCollapse } = useSelector(({ menu }) => ({ isCollapse: menu.isCollapse }), shallowEqual)

	return (
		<div className='logo-box'>
			<img src={logo} alt='logo' className='logo-img' />
			{!isCollapse && <h2 className='logo-text'>React Admin</h2>}
		</div>
	)
})

export default Logo
