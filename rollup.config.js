import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',  // Your entry file
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',  // CommonJS format
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',  // ES module format
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),  // Converts CommonJS to ES6
    postcss(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',   // Transpile modern JavaScript
        '@babel/preset-react', // Transform JSX
      ],
    
    }),
  ],
  external: ['react', 'react-dom'],  // Mark React and ReactDOM as external
};
