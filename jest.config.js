const path = require('path')

module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    path.join(__dirname),
	],
	moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
	},
	watchPlugins: [
		'jest-watch-select-projects',
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname'
	],
	collectCoverageFrom: ['**/src/**/*.js'],
}