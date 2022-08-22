import { sveltekit } from '@sveltejs/kit/vite';
import SocketServer from './socketIO-server.js';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), SocketServer()]
};

export default config;
