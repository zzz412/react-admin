import { App, Avatar, Dropdown } from 'antd'
import React, { memo } from 'react'
import avatar from '@/assets/images/avatar.png'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { setToken } from '@/store/modules/global'
import { useDispatch } from 'react-redux'

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

	// 退出登录
	const { modal, message } = App.useApp()
	const dispatch = useDispatch()
	const logout = () => {
		modal.confirm({
			title: '温馨提示 🧡',
			icon: <ExclamationCircleOutlined />,
			content: '是否确认退出登录？',
			okText: '确认',
			cancelText: '取消',
			onOk: () => {
				dispatch(setToken(''))
				message.success('退出登录成功！')
				navigate('/login')
			}
		})
	}

	const navigate = useNavigate()
	const onClick = ({ key }) => {
		switch (key) {
			case '1':
				return navigate('/')
			case '2':
				return
			case '3':
				return
			case '4':
				return logout()
			default:
				return
		}
	}

	return (
		<Dropdown menu={{ items, onClick }} placement='bottom' arrow trigger={['click']}>
			<Avatar size='large' src={avatar} />
		</Dropdown>
	)
})

export default AvatarIcon
