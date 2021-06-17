import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import eslint from "@rollup/plugin-eslint";
import globals from "rollup-plugin-node-globals"; // React uses process.env.NODE_ENV. This plugin inserts node globals

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm"
  },
  plugins: [
    json(),
    nodeResolve(), //for importing from node_modules
    commonjs(), //Turn CommonJS modules to ES2015 modules
    eslint(),
    globals(),
    typescript(),
    babel({
      exclude: "node_modules/**" // 只编译我们的源代码
    })
  ],
  external: ["lodash"]
};