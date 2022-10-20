import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss"
import Unocss from "unocss/vite"
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    // 添加UnoCSS插件
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    })
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'ThursdayUI',
      fileName: 'Thursday-UI',
      formats: ['esm', 'umd', 'iife']
    }
  }
})