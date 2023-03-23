import { setAssemblySize } from '@/store/modules/global'
import { Dropdown } from 'antd'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const AssemblySize = memo(() => {
	const { assemblySize } = useSelector(({ global }) => ({ assemblySize: global.assemblySize }), shallowEqual)
	const dispatch = useDispatch()

	const items = [
		{
			key: 'middle',
			disabled: assemblySize === 'middle',
			label: <span>默认</span>
		},
		{
			disabled: assemblySize === 'large',
			key: 'large',
			label: <span>大型</span>
		},
		{
			disabled: assemblySize === 'small',
			key: 'small',
			label: <span>小型</span>
		}
	]

	const onClick = ({ key }) => {
		dispatch(setAssemblySize(key))
	}

	return (
		<Dropdown menu={{ items, onClick }} placement='bottom' arrow={true} trigger={['click']}>
			<i className='icon-style iconfont icon-contentright'></i>
		</Dropdown>
	)
})

export default AssemblySize
