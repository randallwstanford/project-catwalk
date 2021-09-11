/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "quote-props": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    "no-unused-vars": "off",
    "import/extensions": "off",
    "react/prefer-stateless-functions": "off",
    "react/prefer-stateless-function": "off",
    "no-useless-constructor": "off",
    "no-console": "off",
    "no-multiple-empty-lines": "off",
    "arrow-parens": "off",
    "camelcase": "off",
    "no-trailing-spaces": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/button-has-type": "off"
  },
};

