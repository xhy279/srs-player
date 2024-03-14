import cjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { dts } from 'rollup-plugin-dts'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/index.umd.js',
        name: 'SrsPlayer',
        format: 'umd',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      cjs(),
      typescript({
        tsconfig: 'tsconfig.json',
      }),
      generatePackageJson({
        inputFolder: './',
        outputFolder: './dist',
        baseContents: (pkg) => {
          const {
            name,
            description,
            version,
            keywords,
            author,
            repository,
            license,
          } = pkg
          return {
            name,
            description,
            version,
            keywords,
            author,
            license,
            repository,
            main: 'index.js',
            module: 'index.esm.js',
            types: 'index.d.ts',
          }
        },
      }),
      postcss({
        extract: 'index.css',
        extensions: ['.css'],
      }),
      copy({
        targets: [
          { src: 'src/refresh.svg', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
        ],
        verbose: true,
        watch: false,
        throwErrorOnSrcNotFound: true,
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
