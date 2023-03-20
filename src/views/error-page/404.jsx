import React, { memo } from 'react'
import { NotFoundWrapper } from './style'

const NotFound = memo(() => {
	return <NotFoundWrapper>404</NotFoundWrapper>
})

NotFound.displayName = 'NotFound'

export default NotFound
