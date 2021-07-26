const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: {
		content: [
			'./src/**/*.html',
			'./src/**/*.js',
			'./src/**/*.ts',
			'./src/**/*.svelte',
			'./src/**/*.md'
		]
		// content: ['./src/**/*.{html,js,svelte,ts,md}']
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// gray: colors.trueGray,
				teal: colors.teal
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};
