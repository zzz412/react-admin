import React, { memo } from 'react'
import { HomeWrapper } from './style'

const Home = memo(() => {
	return <HomeWrapper>Home</HomeWrapper>
})

Home.displayName = 'Home'

export default Home
