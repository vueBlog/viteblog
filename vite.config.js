import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/viteblog/',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // https://sass.bootcss.com/documentation/at-rules/use
        additionalData: `@use "@/styles/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.fxss.work',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
