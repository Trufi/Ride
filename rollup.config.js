import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-only';
import alias from 'rollup-plugin-alias';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        alias({
            vue: 'node_modules/vue/dist/vue.esm.js',
        }),
        resolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        css({output: 'dist/main.css'}),
        commonjs(),
        production && terser(),
    ],
};
