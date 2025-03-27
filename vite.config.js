import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = process.env;
  console.log(env);
  if (mode === 'local-dev') {
    console.log(mode + ' ' + env.VUE_APP_PORT + ' ' + env.VUE_APP_HOST);
    return {
      plugins: [vue(), vueDevTools()],
      server: {
        port: 5173,
        host: 'localhost',
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  } else if (mode === 'development') {
    console.log(mode);
    return {
      plugins: [vue(), vueDevTools()],
      server: {
        port: parseInt(env.VUE_APP_PORT) || 80,
        host: env.VUE_APP_HOST,
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  } else if (mode === 'release') {
    return {
      plugins: [vue()],
      server: {
        port: parseInt(env.VUE_APP_PORT) || 80,
        host: env.VUE_APP_HOST,
      },
    };
    // else throw some error
  }
});