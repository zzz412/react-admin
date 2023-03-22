import styled from 'styled-components'

export const LayoutWrapper = styled.div`
	display: flex;
	min-width: 950px;
	height: 100%;

	.ant-layout {
		background-color: #fff;

		/* 侧边栏 */
		.ant-layout-sider {
			border-right: 1px solid #e4e7ed;
			box-sizing: border-box;
		}

		/* 内容 */
		.ant-layout-content {
			box-sizing: border-box;
			flex: 1;
			padding: 10px 12px;
			/* overflow-x: hidden; */
		}
	}
`
