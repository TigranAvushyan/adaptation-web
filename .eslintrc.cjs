module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'check-file'],
	rules: {
		'prettier/prettier': 'error',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'check-file/filename-naming-convention': [
			'error',
			{ '**/*.{js,ts,tsx,scss}': 'KEBAB_CASE' },
			{ ignoreMiddleExtensions: true },
		],
	},
};
