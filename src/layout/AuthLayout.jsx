import AuthRouter from '@/hoc/AuthRouter'
import React, { memo } from 'react'
import LayoutIndex from '.'

const AuthLayout = memo(() => {
	return (
		<AuthRouter>
			<LayoutIndex />
		</AuthRouter>
	)
})

export default AuthLayout
