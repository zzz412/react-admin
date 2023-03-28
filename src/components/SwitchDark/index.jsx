import { setThemeConfig } from '@/store/modules/global'
import { Switch } from 'antd'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const SwitchDark = memo(() => {
	const { themeConfig } = useSelector(({ global }) => ({ themeConfig: global.themeConfig }), shallowEqual)

	const dispatch = useDispatch()
	const onChange = checked => {
		dispatch(setThemeConfig({ isDark: checked }))
	}

	return <Switch className='dark' checked={themeConfig.isDark} checkedChildren='🌞' unCheckedChildren='🌜' onChange={onChange} />
})

export default SwitchDark
