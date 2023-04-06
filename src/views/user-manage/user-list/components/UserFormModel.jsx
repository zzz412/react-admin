import React, { memo, useEffect, useMemo, useState } from 'react'
import { Form, Input, Modal, Select } from 'antd'
import { addUserApi, updateUserApi, roleListApi, regionsListApi } from '@/api/modules/user'

const UserFormModel = memo(({ open, onCancel, onOk, defaultValues = {} }) => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const [roleList, setRoleList] = useState([])
	const [regionsList, setRegionsList] = useState([])

	// 初始化函数
	const initData = async () => {
		const [res1, res2] = await Promise.all([roleListApi(), regionsListApi()])
		setRoleList(res1.data)
		setRegionsList(res2.data)
	}

	useEffect(() => {
		initData()
	}, [])

	useEffect(() => {
		if (open && defaultValues.id) {
			form.setFieldsValue(defaultValues)
		}
	}, [open])

	const formOk = async () => {
		try {
			const values = await form.validateFields()
			setLoading(true)
			defaultValues.id ? await updateUserApi(defaultValues.id, values) : await addUserApi(values)
			form.resetFields()
			onOk && onOk()
		} catch (e) {
			console.log('校验失败')
		} finally {
			setLoading(false)
		}
	}

	const cancel = () => {
		form.resetFields()
		onCancel && onCancel()
	}

	return (
		<Modal
			title={defaultValues.id ? '更新用户' : '添加用户'}
			open={open}
			onOk={formOk}
			onCancel={cancel}
			confirmLoading={loading}
		>
			<Form form={form} layout='vertical'>
				<Form.Item name='username' label='用户名' rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name='password' label='密码' rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name='region' label='区域' rules={[{ required: true }]}>
					<Select options={regionsList.map(item => ({ label: item.title, value: item.value }))} />
				</Form.Item>
				<Form.Item name='roleId' label='角色' rules={[{ required: true }]}>
					<Select options={roleList.map(item => ({ label: item.roleName, value: item.id }))} />
				</Form.Item>
			</Form>
		</Modal>
	)
})

UserFormModel.displayName = 'UserFormModel'

export default UserFormModel
