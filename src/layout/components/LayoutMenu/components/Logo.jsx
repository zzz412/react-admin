import React, { memo } from 'react'
import logo from '@/assets/images/avatar.png'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Logo = memo(() => {
	const { isCollapse } = useSelector(({ menu }) => ({ isCollapse: menu.isCollapse }), shallowEqual)

	const navigate = useNavigate()
	const goHome = () => {
		navigate('/home')
	}

	return (
		<div className='logo-box' onClick={goHome}>
			<img src={logo} alt='logo' className='logo-img' />
			{!isCollapse && <h2 className='logo-text'>React Admin</h2>}
		</div>
	)
})

export default Logo
