// module.exports = {
//     env: { browser: true, es2020: true },
//     extends: [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:react-hooks/recommended",
//     ],
//     parser: "@typescript-eslint/parser",
//     parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//     plugins: ["react-refresh"],
//     rules: {
//         "react-refresh/only-export-components": "warn",
//         "@typescript-eslint/no-inferrable-types": "off",
//         "no-mixed-spaces-and-tabs": 0, 
//         'prefer-const': 'warn',
//         '@typescript-eslint/no-empty-function': 'off',
//         "@typescript-eslint/ban-types": "off",
//         "@typescript-eslint/no-unused-vars": "warn",
//         "@typescript-eslint/no-explicit-any": "warn"
//     },
// };

const globals = require('globals');
const js = require('@eslint/js');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');

module.exports = [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions', 'functions', 'methods'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
    },
  },
  {
    ignores: ['src/dojo/typescript/models.gen.ts'],
  },
];
