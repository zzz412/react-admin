import '@/style/theme/theme.default.scss'
import '@/style/theme/theme.dark.scss'

import { theme } from 'antd'
const useTheme = themeConfig => {
	const { isDark } = themeConfig

	// 切换暗黑模式
	const body = document.querySelector('body')
	body.className = isDark ? 'dark' : ''

	// antd模式切换
	const themes = {
		algorithm: themeConfig.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
		token: {
			colorPrimary: themeConfig.primary
		}
	}

	return themes
}

export default useTheme
