import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = process.env
  const envMode = env.VITE_APP_MODE
  if (envMode === 'local-dev') {
    return {
      plugins: [vue(), vueDevTools()],
      server: {
        port: env.VUE_APP_PORT,
        host: env.VUE_APP_HOST,
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  } else if (envMode === 'development') {
    console.log(envMode);
    return {
      plugins: [vue(), vueDevTools()],
      server: {
        port: parseInt(env.VUE_APP_PORT) || 80, // TODO: Replace VUE_APP_PORT with VITE_APP_PORT and add in GCP yaml file
        host: env.VUE_APP_HOST, // TODO: Replace VUE_APP_HOST with VITE_APP_HOST and add in GCP yaml file
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  } else if (envMode === 'release') {
    return {
      plugins: [vue()],
      server: {
        port: parseInt(env.VUE_APP_PORT) || 80, // TODO: Replace VUE_APP_PORT with VITE_APP_PORT and add in GCP yaml file
        host: env.VUE_APP_HOST, // TODO: Replace VUE_APP_HOST with VITE_APP_HOST and add in GCP yaml file
      },
    };
    // else throw some error
  }
});