import React, { memo, useEffect, useMemo, useState } from 'react'
import { ListWrapper } from './style'
import { App, Button, Switch, Table } from 'antd'
import { removeUserApi, userListApi, userStateApi } from '@/api/modules/user'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import produce from 'immer'
import UserFormModel from '@/views/user-manage/user-list/components/UserFormModel'

const UserList = memo(() => {
	const { message } = App.useApp()
	const [data, setData] = useState([])
	// 用户表单状态
	const [userVisible, setUserVisible] = useState(false)
	const [currentItem, setCurrentItem] = useState({})

	const columns = useMemo(
		() => [
			{ title: '区域', dataIndex: 'region', render: region => <b>{region === '' ? '全国' : region}</b> },
			{ title: '角色名称', dataIndex: 'role', render: role => role?.roleName },
			{ title: '用户名', dataIndex: 'username' },
			{
				title: '用户状态',
				dataIndex: 'roleState',
				render: (roleState, item, index) => (
					<Switch checked={roleState} disabled={item.default} onChange={checked => changeState(checked, index)} />
				)
			},
			{
				title: '操作',
				render: item => (
					<div>
						<Button
							className='mg10'
							disabled={item.default}
							danger
							shape='circle'
							icon={<DeleteOutlined />}
							onClick={() => handleDelete(item)}
						/>
						<Button
							className='mg10'
							disabled={item.default}
							type='primary'
							shape='circle'
							icon={<EditOutlined />}
							onClick={() => handleUpdate(item)}
						/>
					</div>
				)
			}
		],
		[data]
	)

	// * 拉取表格数据
	const fetchData = async () => {
		const { data } = await userListApi()
		setData(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	// * 相关用户操作
	// 状态、更新、删除、新增
	const changeState = async (checked, index) => {
		setData(
			produce(data => {
				data[index].roleState = checked
			})
		)
		await userStateApi(data[index].id, checked)
		message.success('操作成功')
	}

	const handleUpdate = item => {
		setCurrentItem({ ...item })
		setUserVisible(true)
	}

	const handleDelete = async item => {
		await removeUserApi(item.id)
		message.success('操作成功')
		await fetchData()
	}

	// * 弹框回调操作
	const [onOk, onCancel] = useMemo(() => {
		const cancel = () => {
			setUserVisible(false)
			setCurrentItem({})
		}
		const ok = () => {
			fetchData()
			cancel()
		}
		return [ok, cancel]
	}, [])

	return (
		<ListWrapper className='card'>
			<Button type='primary' className='mb10' onClick={() => setUserVisible(true)}>
				添加用户
			</Button>
			<Table dataSource={data} columns={columns} pagination={{ pageSize: 10 }} rowKey={item => item.id} />

			{/*user操作弹窗*/}
			<UserFormModel open={userVisible} defaultValues={currentItem} onCancel={onCancel} onOk={onOk} />
		</ListWrapper>
	)
})

UserList.displayName = 'UserList'

export default UserList
