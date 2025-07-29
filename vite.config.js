import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import ViteVueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    //自动引入方法
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: [
        './src/api/list'
      ],
      dts: './src/auto-imports.d.ts', // 自动生成声明文件（可选）
    }),
    // 自动引入 Vue 组件
    Components({
      dirs: ['src/components'], // 指定组件目录
      dts: './src/components.d.ts', // 自动生成声明文件（可选）
      deep: true, // 递归扫描子目录
      extensions: ['vue'], // 支持的文件扩展名
      resolvers: [
        // 如果需要支持其他组件库（如 Element Plus），可以在这里添加 resolver
         ElementPlusResolver()
      ]
    }),

    ViteVueDevTools({
      open: true,
      devtoolsUrl: '',
      launchEditor: 'webstorm'
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
