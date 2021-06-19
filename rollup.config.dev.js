import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import eslint from "@rollup/plugin-eslint";
import serve from "rollup-plugin-serve"; // 本地服务器
import livereload from "rollup-plugin-livereload"; // 热更新插件
import globals from "rollup-plugin-node-globals"; // React uses process.env.NODE_ENV. This plugin inserts node globals
import postcss from "rollup-plugin-postcss";
// import sass from "node-sass";

export default {
  input: "src/sample/index.tsx",
  output: {
    file: "public/build/js/sample.bundle.js",
    format: "cjs"
  },
  plugins: [
    postcss(),
    json(),
    nodeResolve(), //for importing from node_modules
    commonjs(), //Turn CommonJS modules to ES2015 modules
    eslint(),
    globals(),
    typescript(),
    babel({
      exclude: "node_modules/**" // 只编译我们的源代码
    }),
    livereload(),
    serve({
      open: true,
      contentBase: ["public"],
      host: "localhost",
      port: 10001
    })
  ],
  external: ["lodash"]
};