import { setLanguage } from '@/store/modules/global'
import { Dropdown } from 'antd'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const Language = memo(() => {
	const { language } = useSelector(({ global }) => ({ language: global.language }), shallowEqual)
	const dispatch = useDispatch()

	const items = [
		{
			key: 'zh',
			label: <span>简体中文</span>,
			disabled: language === 'zh'
		},
		{
			key: 'en',
			label: <span>English</span>,
			disabled: language === 'en'
		}
	]

	const onClick = ({ key }) => {
		dispatch(setLanguage(key))
	}

	return (
		<Dropdown menu={{ items, onClick }} placement='bottom' arrow={true} trigger={['click']}>
			<i className='icon-style iconfont icon-zhongyingwen'></i>
		</Dropdown>
	)
})

export default Language
