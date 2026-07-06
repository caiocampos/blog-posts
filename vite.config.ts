import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
	base: '/blog-posts/',
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			public: resolve(__dirname, './public')
		}
	},
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				codeSplitting: {
					groups: [
						{
							test: /node_modules\/react/,
							name: 'react'
						},
						{
							test: /node_modules\/react-dom/,
							name: 'react-dom'
						},
						{
							test: /node_modules\/react-router-dom/,
							name: 'react-router-dom'
						},
						{
							test: /node_modules\/@base-ui\/react/,
							name: 'base-ui'
						},
						{
							test: /node_modules\/lucide-react/,
							name: 'lucide-react'
						}
					]
				}
			}
		}
	}
});
