import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'
import {resolve} from 'path'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8508,
  },
  preview: {
    port: 8508,
  },
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@src',
          replacement: resolve(projectRootDir, 'src')
        }
      ]
    })
  ],
})
