import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// During dev, proxy /api to the Express backend so the frontend can call
// relative URLs (no CORS headaches, same as production behind one domain).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
