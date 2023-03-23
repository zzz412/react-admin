import styled from 'styled-components'
import logo from '@/assets/images/login_bg.svg'

export const LoginWrapper = styled.div`
	position: relative;
	min-width: 550px;
	height: 100%;
	min-height: 500px;
	background-image: url(${logo});
	background-position: 50%;
	background-size: cover;
	.dark {
		position: absolute;
		top: 5%;
		right: 3.2%;
	}

	.login-box {
		width: 96%;
		height: 94%;
		padding: 0 4% 0 20px;
		box-sizing: border-box;
		overflow: hidden;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.8);
		justify-content: space-around;

		.login-left {
			width: 750px;
			img {
				width: 100%;
				height: 100%;
			}
		}

		.login-form {
			padding: 40px 45px 25px;
			border-radius: 10px;
			background-color: transparent;
			box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.2);

			.login-logo {
				margin-bottom: 40px;
				.login-icon {
					width: 70px;
				}
				.logo-text {
					padding-left: 25px;
					font-size: 48px;
					font-weight: bold;
					white-space: nowrap;
					color: #475768;
				}
			}

			.ant-form-item {
				height: 75px;
				margin-bottom: 0;

				.ant-input-prefix {
					margin-right: 10px;
				}

				.ant-input-affix-wrapper-lg {
					padding: 8.3px 11px;
				}

				.ant-input-affix-wrapper,
				.ant-input-lg {
					font-size: 14px;
				}

				.ant-input-affix-wrapper {
					color: #bfbfbf;
				}
			}

			.login-btn {
				width: 100%;
				margin-top: 10px;
				white-space: nowrap;

				.ant-form-item-control-input-content {
					display: flex;
					justify-content: space-between;

					.ant-btn {
						width: 180px;
						span {
							font-size: 14px;
						}
					}
				}
			}
		}
	}
`
