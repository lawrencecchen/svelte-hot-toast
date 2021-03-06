import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		package: {
			exports: (file) => file === 'index.ts'
		},
		vite: {
			resolve: {
				alias: {
					'svelte-hot-toast': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
