import React, { memo } from 'react'
import { NotFoundWrapper } from './style'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = memo(() => {
	const navigate = useNavigate()
	const goHome = () => {
		navigate('/home')
	}

	return (
		<NotFoundWrapper>
			<Result
				status={403}
				title='403'
				subTitle='很抱歉，您无权访问此页面。'
				extra={
					<Button type='primary' onClick={goHome}>
						返回主页
					</Button>
				}
			/>
		</NotFoundWrapper>
	)
})

NotFound.displayName = 'NotFound'

export default NotFound
