import {
  fileURLToPath,
  URL
} from 'node:url'
import {
  defineConfig
} from 'vite'
import vue
  from '@vitejs/plugin-vue'
import UnoCSS
  from 'unocss/vite'
import ViteVueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    ViteVueDevTools({
      open: true,
      devtoolsUrl: 'webstorm://open?file=E:/path-to-your-project/src/App.vue'
    })
  ],
  build: {
    minify: "terser",
    terserOptions: {
      // 配置打包完取消打印和debugger
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      host: "localhost",
      port: "5174",
      open: "true",
      https: "true",
      cors: "true",
      "/api": {
        target: "http://192.168.3.117:7021",
        changeOrigin: true,
        secure: false,
        rewrite:(path)=>path.replace(/^\/api/,'') //api替换为'',
      }
    },
  },
})
