import React, { memo } from 'react'
import logo from '@/assets/images/logo.png'

const Logo = memo(() => {
	return (
		<div className='logo-box'>
			<img src={logo} alt='logo' className='logo-img' />
			<h2 className='logo-text'>React Admin</h2>
		</div>
	)
})

export default Logo
