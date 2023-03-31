import { loginApi } from '@/api/modules/user'
import { setAuthRouter } from '@/store/modules/auth'
import { setToken, setUserinfo } from '@/store/modules/global'
import { CloseCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, App } from 'antd'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginForm = memo(() => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const initialValues = { username: 'admin', password: '123456' }
	const { message } = App.useApp()

	const navigate = useNavigate()
	const dispatch = useDispatch()
	// 提交【验证成功】
	const onFinish = async loginForm => {
		try {
			setLoading(true)
			const { data } = await loginApi(loginForm)
			if (!data.length) return message.error('用户名与密码不匹配')

			const user = data[0]
			dispatch(setToken(JSON.stringify(user)))
			dispatch(setUserinfo(user))
			dispatch(setAuthRouter(user.role.rights))
			message.success('登录成功！')
			navigate('/home')
		} finally {
			setLoading(false)
		}
	}

	// 提交【验证失败】
	const onFinishFailed = errorInfo => {
		console.log('Failed', errorInfo)
	}

	return (
		<Form
			form={form}
			name='basic'
			labelCol={{ span: 5 }}
			initialValues={initialValues}
			size='large'
			autoComplete='off'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
				<Input autoComplete='new-username' placeholder='用户名' prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
				<Input.Password autoComplete='new-password' placeholder='密码' prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className='login-btn'>
				<Button icon={<CloseCircleOutlined />} onClick={() => form.resetFields()}>
					重置
				</Button>
				<Button type='primary' htmlType='submit' loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	)
})

export default LoginForm
