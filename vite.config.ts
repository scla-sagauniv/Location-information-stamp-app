import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	base: '/c-stamp/',
	server: {
		host: true,
		port: 5173,
		hmr: {
			// ここに接続可能なポートを指定する
			port: 443,
		},
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
