/** @see https://github.com/microsoft/rushstack#readme */
require('@rushstack/eslint-patch/modern-module-resolution');

const COMMON_JS_EXTENSIONS = 'cjs,cts';
const TS_EXTENSIONS = 'ts,cts,mts';

/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    warnOnUnsupportedTypeScriptVersion: false,
  },

  plugins: [
    /** @npm https://www.npmjs.com/package/eslint-plugin-import */
    'import',

    /** @npm https://www.npmjs.com/package/eslint-plugin-sort-keys-custom-order */
    'sort-keys-custom-order',
  ],

  extends: [
    /** @config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts */
    'eslint:recommended',

    /**
     * @npm https://www.npmjs.com/package/eslint-plugin-prettier
     * @config https://github.com/prettier/eslint-plugin-prettier/blob/master/eslint-plugin-prettier.js
     */
    'plugin:prettier/recommended',
  ],

  rules: {
    /** @docs https://eslint.org/docs/latest/rules */
    'no-console': 'off',
    'no-debugger': 'off',

    /** @docs https://github.com/import-js/eslint-plugin-import#rules */
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
    'import/no-duplicates': ['warn', { considerQueryString: true }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'internal',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'never',
      },
    ],

    /** @docs https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order#usage */
    'sort-keys-custom-order/import-object-keys': 'warn',
    'sort-keys-custom-order/export-object-keys': 'warn',
  },

  overrides: [
    {
      files: [`**/*.{${COMMON_JS_EXTENSIONS}}`],

      env: { node: true },
    },

    {
      files: [`**/*.{jsx,tsx}`],

      plugins: [
        /** @npm https://www.npmjs.com/package/eslint-plugin-react */
        'react',
      ],

      extends: [
        /**
         * @npm https://www.npmjs.com/package/eslint-plugin-jsx-a11y
         * @config https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js
         */
        'plugin:jsx-a11y/strict',

        /**
         * @npm https://www.npmjs.com/package/eslint-plugin-solid
         * @config https://github.com/solidjs-community/eslint-plugin-solid/blob/main/src/index.ts
         */
        'plugin:solid/recommended',
      ],

      rules: {
        /** @docs https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules */
        'jsx-a11y/control-has-associated-label': 'error',

        /** @docs https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules */
        'react/jsx-sort-props': [
          'warn',
          {
            noSortAlphabetically: true,
            shorthandFirst: true,
            shorthandLast: false,
            callbacksLast: true,
            multiline: 'last',
            ignoreCase: true,
            reservedFirst: ['key', 'ref'],
          },
        ],
      },
    },

    {
      files: [`**/*.{${TS_EXTENSIONS},tsx}`],

      settings: {
        /** @docs https://github.com/import-js/eslint-import-resolver-typescript#configuration */
        'import/resolver': { typescript: {} },
      },

      extends: [
        /**
         * @npm https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
         * @config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
         */
        'plugin:@typescript-eslint/recommended',
      ],

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: true,
          },
        ],

        /** @docs https://github.com/import-js/eslint-plugin-import#rules */
        'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      },
    },
  ],
};
