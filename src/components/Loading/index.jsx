import { Spin } from 'antd'
import React, { memo } from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const Loading = memo(() => {
	return (
		<LoadingWrapper>
			<Spin tip='loading...' />
		</LoadingWrapper>
	)
})

Loading.displayName = 'Loading'

export default Loading
