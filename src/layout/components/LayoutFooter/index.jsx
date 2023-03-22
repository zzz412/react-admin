import { Layout } from 'antd'
import React, { memo } from 'react'
import { FooterWrapper } from './style'

const LayoutFooter = memo(() => {
	const { Footer } = Layout
	return (
		<FooterWrapper>
			<Footer>
				<a href='http://zeng.pub/' target='_blank' rel='noreferrer'>
					2023 © React-Admin By ZZZ Technology.
				</a>
			</Footer>
		</FooterWrapper>
	)
})

LayoutFooter.displayName = 'LayoutFooter'

export default LayoutFooter
