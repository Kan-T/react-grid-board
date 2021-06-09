module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime"
  ],
  env: {
    esm: {
      presets: [
        [
          "@babel/env",
          {
            modules: false
          }
        ]
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true
          }
        ]
      ]
    }
  }
};