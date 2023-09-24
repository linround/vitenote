// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import makecert from 'vite-plugin-mkcert'

export default defineConfig({
    plugins:[makecert()],
    build: {
        // cssCodeSplit:false,// 将所有css抽离到一个文件中
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'nested/index.html'),
            },
        },
    },
})
