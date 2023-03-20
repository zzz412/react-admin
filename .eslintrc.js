// @see: http://eslint.cn
module.exports = {
	settings: {
		react: {
			version: 'detect'
		}
	},
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	/* 优先级低于 parse 的语法解析配置 */
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true
		}
	},
	// plugins: ['react', 'react-hooks', 'prettier'],
	/* 继承某些已有的规则 */
	extends: ['react-app', 'plugin:prettier/recommended'],
	/*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
		'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
		'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		'no-irregular-whitespace': 'off', // 禁止不规则的空白

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		'react-hooks/rules-of-hooks': 'off',
		'react-hooks/exhaustive-deps': 'off',

		// prettierrc配置
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				semi: false,
				singleQuote: true,
				vueIndentScriptAndStyle: true,
				arrowParens: 'avoid',
				trailingComma: 'none'
			}
		]
	}
}
