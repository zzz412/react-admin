import { Layout } from 'antd'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { FooterWrapper } from './style'

const LayoutFooter = memo(() => {
	const { Footer } = Layout
	const isShow = useSelector(({ global }) => global.themeConfig.footer)

	return (
		<>
			{isShow && (
				<FooterWrapper>
					<Footer>
						<a href='http://zeng.pub/' target='_blank' rel='noreferrer'>
							2023 © React-Admin By ZZZ Technology.
						</a>
					</Footer>
				</FooterWrapper>
			)}
		</>
	)
})

LayoutFooter.displayName = 'LayoutFooter'

export default LayoutFooter
