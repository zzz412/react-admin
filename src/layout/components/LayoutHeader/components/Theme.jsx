import SwitchDark from '@/components/SwitchDark'
import { setThemeConfig } from '@/store/modules/global'
import { FireOutlined, SettingOutlined } from '@ant-design/icons'
import { Divider, Drawer, Switch } from 'antd'
import React, { memo, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const Theme = memo(() => {
	const [open, setOpen] = useState(false)
	const { breadcrumb, footer } = useSelector(({ global }) => global.themeConfig, shallowEqual)
	const dispatch = useDispatch()

	const onClose = () => {
		setOpen(false)
	}
	// Todo: 界面设置
	return (
		<>
			<i className='icon-style iconfont icon-zhuti' onClick={() => setOpen(true)}></i>
			<Drawer title='布局设置' placement='right' width={320} closable={false} open={open} onClose={onClose}>
				<Divider className='divider'>
					<FireOutlined />
					全局主题
				</Divider>
				<div className='theme-item'>
					<span>暗黑模式</span>
					<SwitchDark />
				</div>
				<Divider className='divider'>
					<SettingOutlined />
					界面设置
				</Divider>
				<div className='theme-item'>
					<span>面包屑导航</span>
					<Switch checked={breadcrumb} onChange={checked => dispatch(setThemeConfig({ breadcrumb: checked }))} />
				</div>
				<div className='theme-item'>
					<span>标签栏</span>
					<Switch />
				</div>
				<div className='theme-item'>
					<span>页脚</span>
					<Switch checked={footer} onChange={checked => dispatch(setThemeConfig({ footer: checked }))} />
				</div>
			</Drawer>
		</>
	)
})

export default Theme
