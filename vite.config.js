import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = process.env;
  if (mode === 'development') {
    return {
      plugins: [vue(), vueDevTools()],
      server: {
        port: parseInt(env.VUE_APP_DEV_PORT) || 5173,
        host: env.VUE_APP_DEV_HOST || 'localhost',
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  } else {
    return {
      plugins: [vue()],
      server: {
        port: parseInt(env.VUE_APP_PROD_PORT) || 8080,
        host: env.VUE_APP_PROD_HOST,
      },
    };
  }
});