import styled from 'styled-components'

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	.logo-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 55px;
		border-bottom: 1px solid #010b14;
		cursor: pointer;

		.logo-img {
			width: 30px;
			margin: 0;
			border-radius: 4px;
			overflow: hidden;
		}

		.logo-text {
			margin: 0 0 0 10px;
			font-size: 24px;
			font-weight: bold;
			color: #dadada;
			white-space: nowrap;
		}
	}

	/* menu菜单 */
	.ant-menu-root {
		flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.ant-menu {
		border-right: 0;

		.ant-menu-submenu-title,
		.ant-menu-item {
			border-radius: 0;
			margin: 0;
			height: 48px;
			line-height: 48px;
			width: 100%;
		}

		&::-webkit-scrollbar {
			background-color: #001529;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #41444b;
		}
	}

	/* 去除菜单 Loading 遮罩层 */
	.ant-spin-nested-loading,
	.ant-spin-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		.ant-spin {
			max-height: 100% !important;
		}
		.ant-spin-container::after {
			background: transparent !important;
		}
		.ant-spin-blur {
			overflow: auto !important;
			clear: none !important;
			opacity: 1 !important;
		}
	}
`
