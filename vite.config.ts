import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

const aliases = ['components', 'utils', 'hooks', 'configs', 'page'];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ...aliases.map((item) => ({
        find: `@${item}`,
        replacement: path.resolve(__dirname, `./src/${item}`),
      })),
    },
  },
})
