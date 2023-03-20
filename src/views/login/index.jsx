import { Button } from 'antd'
import React, { memo } from 'react'
import { LoginWrapper } from './style'

const Login = memo(() => {
	return (
		<LoginWrapper>
			<Button>这是按钮</Button>
		</LoginWrapper>
	)
})

Login.displayName = 'Login'

export default Login
