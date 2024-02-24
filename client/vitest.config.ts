import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    root: __dirname,
    environment: 'jsdom',
    setupFiles: ['./mocks/setup.ts'],
  }
});
