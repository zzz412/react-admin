import { Layout } from 'antd'
import React, { memo } from 'react'
import AssemblySize from './components/AssemblySize'
import AvatarIcon from './components/AvatarIcon'
import BreadcrumbNav from './components/BreadcrumbNav'
import CollapseIcon from './components/CollapseIcon'
import Fullscreen from './components/Fullscreen'
import Language from './components/Language'
import Theme from './components/Theme'
import { HeaderWrapper } from './style'

const LayoutHeader = memo(() => {
	const { Header } = Layout
	return (
		<HeaderWrapper>
			<Header>
				<div className='header-lf'>
					<CollapseIcon />
					<BreadcrumbNav />
				</div>
				<div className='header-ri'>
					<AssemblySize />
					<Language />
					<Theme />
					<Fullscreen />
					<span className='username'>Hooks</span>
					<AvatarIcon />
				</div>
			</Header>
		</HeaderWrapper>
	)
})

LayoutHeader.displayName = 'LayoutHeader'

export default LayoutHeader
