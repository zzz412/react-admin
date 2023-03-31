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
				status={500}
				title='500'
				subTitle='对不起，出了问题。'
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
