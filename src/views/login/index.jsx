import React, { memo } from 'react'
import loginLeft from '@/assets/images/login_left.png'
import logo from '@/assets/images/logo.png'
import { LoginWrapper } from './style'
import LoginForm from './components/LoginForm'
import SwitchDark from '@/components/SwitchDark'

const Login = memo(() => {
	return (
		<LoginWrapper className='flx-c login-container'>
			<SwitchDark />
			<div className='login-box flx-j'>
				<div className='login-left'>
					<img src={loginLeft} alt='login' />
				</div>
				<div className='login-form'>
					<div className='login-logo flx-c'>
						<img className='login-icon' src={logo} alt='logo-icon' />
						<span className='logo-text'>React-Admin</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</LoginWrapper>
	)
})

Login.displayName = 'Login'

export default Login
