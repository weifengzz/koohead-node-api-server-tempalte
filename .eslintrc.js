module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "import/no-commonjs": "error",
    "no-console": "off",
    "semi": ["error", "never"], // 不允许使用分号
    "no-extra-semi": "error",
    "switch-colon-spacing": ["error", {"after": true, "before": false}],
    "space-before-blocks": "error",
    "no-useless-constructor": "error",
    "require-await": "error"
  }
}
