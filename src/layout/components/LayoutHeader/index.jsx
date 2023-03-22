import { Layout } from 'antd'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const LayoutHeader = memo(() => {
	const { Header } = Layout
	return (
		<HeaderWrapper>
			<Header>LayoutHeader</Header>
		</HeaderWrapper>
	)
})

LayoutHeader.displayName = 'LayoutHeader'

export default LayoutHeader
