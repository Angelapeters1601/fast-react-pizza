import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    base: '/fast-react-pizza/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
})
