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

		.logo-img {
			width: 30px;
			margin: 0;
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
`
