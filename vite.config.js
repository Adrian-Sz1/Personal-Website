
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import dotenv from 'dotenv';

dotenv.config();

export function createViteConfig() {
  const env = process.env;

  const envMode = env.VITE_APP_MODE;
  const envPort = env.VITE_APP_PORT;
  const envHost = env.VITE_APP_HOST;

  if (envMode === 'local-dev') {
    console.log(envMode + ' @ ' + envHost + ':' + envPort);
    return {
      plugins: [vue(), vueDevTools()],
      server: {
        port: envPort,
        host: envHost,
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      test: {
        globals: true,
        environment: 'happy-dom',
      },
    };
  } else if (envMode === 'development') {
    console.log(envMode + ' @ ' + envHost + ':' + envPort);
    return {
      plugins: [vue(), vueDevTools()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
    };
  } else if (envMode === 'release') {
    console.log(envMode + ' @ ' + envHost + ':' + envPort);
    return {
      plugins: [vue()],
    };
  }
  throw new Error(`Invalid VITE_APP_MODE: ${envMode}`);
}

export default defineConfig(() => {
  const env = process.env;
  return createViteConfig(env);
});