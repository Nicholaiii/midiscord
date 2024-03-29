/* eslint-env node */

import { chrome } from '../../.electron-vendors.cache.json'
import { join } from 'path'
import { builtinModules } from 'module'
import vue from '@vitejs/plugin-vue'
import VuetifyPlugin from 'vite-plugin-vuetify'

const PACKAGE_ROOT = __dirname

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
      '/@main/': join(PACKAGE_ROOT, '../main/src') + '/',
      '/@common/': join(PACKAGE_ROOT, '../common') + '/',
    },
  },
  plugins: [vue(), VuetifyPlugin()],
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html'),
      external: [
        'electron-store',
        ...builtinModules.flatMap(p => [p, `node:${p}`]),
      ],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
  test: {
    environment: 'happy-dom',
  },
}

export default config
