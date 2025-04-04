// vitest.config.js
import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import { createViteConfig } from './vite.config';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env;
const viteConfig = createViteConfig(env);

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
);