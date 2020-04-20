module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'getter-return': 'warn',
    'no-extra-semi': 'warn',
    'no-empty': 'warn',
    'no-template-curly-in-string': 'warn',
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'no-throw-literal': 'error',
    'prefer-regex-literals': 'error',
    'no-warning-comments': 'warn',
    'require-await': 'warn',
    'object-shorthand': 'warn',
    'no-unneeded-ternary': 'warn',
    eqeqeq: ['error', 'smart'],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
  },
};
