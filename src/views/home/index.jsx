import React, { memo } from 'react'
import { HomeWrapper } from './style'
import welcome from '@/assets/images/welcome01.png'

const Home = memo(() => {
	return (
		<HomeWrapper className='card'>
			<img src={welcome} alt='welcome' />
		</HomeWrapper>
	)
})

Home.displayName = 'Home'

export default Home
