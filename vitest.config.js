// vitest.config.js
import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import { createViteConfig } from './vite.config';

const viteConfig = createViteConfig();

export default mergeConfig(
  viteConfig,
  defineConfig({
    root: fileURLToPath(new URL('./', import.meta.url)),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'tests/e2e/**'],
    },
  })
);