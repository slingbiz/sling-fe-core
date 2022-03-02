const autoprefixer = require('autoprefixer');
import {terser} from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// the entry point for the library
const input = './index.js';

//
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

var MODE = [
  {
    fomart: 'cjs',
  },
  {
    fomart: 'esm',
  },
  {
    fomart: 'umd',
  },
];

var config = [];

MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      // then name of your package
      name: 'react-awesome-buttons',
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: 'auto',
    },
    plugins: [
      nodeResolve(),
      resolve({
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions,
      }),
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime',
        extensions,
      }),
      commonjs(),
    ],
    // this externelizes react to prevent rollup from compiling it
    external: ['react', /@babel\/runtime/],
  };
  config.push(conf);
});

export default [...config];
