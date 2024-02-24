import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      },
    },
    modules: {
      scopeBehaviour: 'local',
      hashPrefix: 'hash',
      localsConvention: 'dashesOnly'
    }
  },
  server: {
    port: 3000,
    host: true,
  }
});
