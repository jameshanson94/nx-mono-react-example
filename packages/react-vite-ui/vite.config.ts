import alias from '@rollup/plugin-alias'
import { resolve } from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
      lib: {
        entry: resolve('src', 'index.ts'),
        name: 'react-vite-ui',
        formats: ['es', 'umd'],
        fileName: (format) => `react-vite-ui.${format}.js`,
      },
      rollupOptions: {
        // external: [...Object.keys(packageJson.peerDependencies)],
      },
    },
});
