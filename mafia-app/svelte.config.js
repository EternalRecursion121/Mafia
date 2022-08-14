import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import socketIO_server from 'socketIO-server'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
	
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
			  socket_server(),
			],
		},
	}
};

export default config;
