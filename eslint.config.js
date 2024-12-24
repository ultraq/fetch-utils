import myConfig from 'eslint-config-ultraq';
import globals from 'globals';

/**
 * @typedef {import('eslint').Linter.Config[]}
 */
export default [
	...myConfig,
	{
		ignores: [
			'fetch-utils.cjs.js',
			'fetch-utils.es.js'
		]
	},
	{
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.node
			}
		}
	}
];
