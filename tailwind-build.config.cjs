module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/lib/**/*.ts', './src/lib/**/*.svelte']
	},
	darkMode: false, // or 'media' or 'class'
	theme: {},
	variants: {
		extend: {}
	},
	corePlugins: {
		preflight: false
	}
};
