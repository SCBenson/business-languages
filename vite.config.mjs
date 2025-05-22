// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),

    process.env.NODE_ENV === 'production' && visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    target: 'es2015',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    rollupOptions: {
      output: {
        // Configure JavaScript files to go in js/ folder
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        
        // Configure asset files (CSS, images, fonts) organization
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop()
          
          if (extType === 'css') {
            return 'css/[name]-[hash].[ext]'
          }
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'webp'].includes(extType)) {
            return 'img/[name]-[hash].[ext]'
          }
          if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(extType)) {
            return 'fonts/[name]-[hash].[ext]'
          }
          
          return 'assets/[name]-[hash].[ext]'
        },
        
        manualChunks: (id) => {
          if (id.includes('node_modules/vue/') || id.includes('node_modules/vue-router/')) {
            return 'vue-core';
          }
          
          if (id.includes('node_modules/vuetify/')) {
            return 'vuetify';
          }
          
          if (id.includes('node_modules/@mdi/font/')) {
            return 'icons';
          }
          
          if (id.includes('src/locales/')) {
            return 'locales';
          }
          
          if (id.includes('node_modules/') && !id.includes('node_modules/vue/') && 
              !id.includes('node_modules/vue-router/') && !id.includes('node_modules/vuetify/') && 
              !id.includes('node_modules/@mdi/font/')) {
            return 'vendor';
          }
        }
      }
    }
  }
})