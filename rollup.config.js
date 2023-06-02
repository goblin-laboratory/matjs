// import clean from '@rollup-extras/plugin-clean';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    { name: pkg.name, file: pkg.browser, format: 'umd', sourcemap: true },
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [
    // clean('dist'),
    typescript(), // TypeScript 插件
    terser(), // 压缩代码插件
    nodeResolve(),
    commonjs(),
    filesize(),
  ],
};
