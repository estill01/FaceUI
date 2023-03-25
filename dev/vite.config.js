import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      face_ui: `${__dirname}/../src`,
    }
  },
  build: {
    rollupOptions: {
      external: ['face_ui'],
    }
  },
  plugins: [reactPlugin()],
});
