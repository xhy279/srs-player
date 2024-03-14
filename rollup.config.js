import cjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { dts } from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'lib/index.umd.js',
        name: 'SrsPlayer',
        format: 'umd',
        sourcemap: true,
      },
      {
        file: 'lib/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      cjs(),
      typescript({
        tsconfig: 'tsconfig.json',
      }),
      postcss({
        extract: 'index.css',
        extensions: ['.css'],
      }),
      copy({
        targets: [{ src: 'src/refresh.svg', dest: 'lib' }],
        verbose: true,
        watch: false,
        throwErrorOnSrcNotFound: true,
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
