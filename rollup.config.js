import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    // replace({
    //   'process.env.NODE_ENV': JSON.stringify( 'development' )
    // }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs({
        include: '**/node_modules/**',
        namedExports: {},
    }),
    terser(),
  //  cleanup(),
    // serve({
    //   open: true,
    //   verbose: true,
    //   contentBase: ["", "public"],
    //   host: "localhost",
    //   port: 3000,
    // }),
    // livereload({ watch: "dist" }),
  ]
};