import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { type Plugin } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react()],
  publicDir: 'public',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
