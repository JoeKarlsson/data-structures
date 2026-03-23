import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  js.configs.recommended,
  prettier,
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    plugins: {
      jsdoc,
    },
    rules: {
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-plusplus': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': 'off',
      'consistent-return': 'off',
      'no-bitwise': 'off',
      'no-shadow': 'off',
      camelcase: 'off',
      'no-continue': 'off',
      'no-restricted-syntax': 'off',
      'guard-for-in': 'off',
      'no-unused-expressions': 'off',
      'func-names': 'off',
      'max-classes-per-file': 'off',
      'class-methods-use-this': 'off',
      'no-extend-native': 'off',
      'no-self-assign': 'off',
      'no-mixed-operators': 'off',
      'no-sequences': 'off',
      'no-constant-condition': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'array-callback-return': 'off',
      'prefer-destructuring': 'off',
      'no-else-return': 'off',
      'no-case-declarations': 'off',
      'no-confusing-arrow': 'off',
      'no-multi-assign': 'off',
      'no-restricted-properties': 'off',
      'jsdoc/require-jsdoc': 'warn',
      'jsdoc/require-description': 'warn',
      'jsdoc/require-param': 'warn',
      'jsdoc/require-returns': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', 'coverage/**', '.nyc_output/**'],
  },
];
