import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

const isCi = !!process.env.CI;

// https://vitejs.dev/config/
export default defineConfig({
  base: isCi ? '/jugger-trainer-web' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
});
