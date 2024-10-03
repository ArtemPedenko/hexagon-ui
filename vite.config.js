import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'dragonekui',
            fileName: function (format) { return "dragonekui.".concat(format, ".ts"); },
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
