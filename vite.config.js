/* eslint-env node */
import { defineConfig } from 'vite'

const path = require('path')

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                charset: false
            }
        }
    },
    server: {
        host: true,
        port: 80
    },
    preview: {
        port: 80
    }
})
