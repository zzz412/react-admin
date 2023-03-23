import { Avatar, Dropdown } from 'antd'
import React, { memo } from 'react'
import avatar from '@/assets/images/avatar.png'

const AvatarIcon = memo(() => {
	const items = [
		{
			key: '1',
			label: <span className='dropdown-item'>首页</span>
		},
		{
			key: '2',
			label: <span className='dropdown-item'>个人信息</span>
		},
		{
			key: '3',
			label: <span className='dropdown-item'>修改密码</span>
		},
		{
			type: 'divider'
		},
		{
			key: '4',
			label: <span className='dropdown-item'>退出登录</span>
		}
	]

	const onClick = ({ key }) => {
		console.log(key)
	}

	return (
		<Dropdown menu={{ items, onClick }} placement='bottom' arrow trigger={['click']}>
			<Avatar size='large' src={avatar} />
		</Dropdown>
	)
})

export default AvatarIcon
