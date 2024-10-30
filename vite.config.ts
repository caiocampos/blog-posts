import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';
import { resolve } from 'path';
import { dependencies } from './package.json';

const vendorReactList = ['react', 'react-dom', 'react-router-dom'];
const vendorAntdList = ['antd', '@ant-design/pro-layout', '@ant-design/pro-table'];

function renderChunks(deps: Record<string, string>) {
	const chunks: string[] = [];
	Object.keys(deps).forEach((key) => {
		if (vendorReactList.includes(key) || vendorAntdList.includes(key)) {
			return;
		}
		chunks.push(key);
	});
	return chunks;
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			public: resolve(__dirname, './public')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
				api: 'modern-compiler'
			}
		}
	},
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor_react: vendorReactList,
					vendor_antd: vendorAntdList,
					vendor: renderChunks(dependencies)
				}
			}
		}
	}
});
