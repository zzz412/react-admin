import { CloseCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React, { memo } from 'react'

const LoginForm = memo(() => {
	const [form] = Form.useForm()

	// 提交【验证成功】
	const onFinish = loginForm => {
		console.log(loginForm)
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
			initialValues={{ remember: true }}
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
				<Button type='primary' htmlType='submit' loading={false} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	)
})

export default LoginForm
