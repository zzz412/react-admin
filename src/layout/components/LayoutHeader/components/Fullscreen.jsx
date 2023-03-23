import screenfull from 'screenfull'
import classNames from 'classnames'
import React, { memo, useEffect, useState } from 'react'
import { message } from 'antd'

const Fullscreen = memo(() => {
	const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen)

	useEffect(() => {
		screenfull.on('change', () => {
			setFullScreen(screenfull.isFullscreen)
		})
		return () => screenfull.off('change')
	}, [])

	const handleFullScreen = () => {
		if (!screenfull.isEnabled) message.warning('当前您的浏览器不支持全屏 ❌')
		screenfull.toggle()
	}

	return (
		<i className={classNames('icon-style iconfont', fullScreen ? 'icon-suoxiao' : 'icon-fangda')} onClick={handleFullScreen}></i>
	)
})

export default Fullscreen
