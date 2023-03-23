import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	/* 头部 */
	.ant-layout-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #f6f6f6;
		height: 55px;
		padding: 0 40px 0 20px;
		background-color: #fff;
		.header-lf {
			display: flex;
			align-items: center;

			.collapsed {
				margin-right: 20px;
				font-size: 18px;
				cursor: pointer;
				transition: color 0.3s;
			}

			.ant-breadcrumb a {
				color: inherit;
			}
		}

		.header-ri {
			display: flex;
			align-items: center;

			.icon-style {
				margin-right: 22px;
				font-size: 19px;
				line-height: 19px;
				cursor: pointer;
			}

			.username {
				margin: 0 20px 0 0;
				font-size: 15px;
			}

			.ant-avatar {
				cursor: pointer;
			}
		}
	}
`
