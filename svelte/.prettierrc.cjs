/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    /** @npm https://www.npmjs.com/package/prettier-plugin-jsdoc */
    require.resolve('prettier-plugin-jsdoc'),

    /** @npm https://www.npmjs.com/package/prettier-plugin-svelte */
    require.resolve('prettier-plugin-svelte'),
  ],

  /** @docs https://prettier.io/docs/en/options */
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',

  /** @docs https://github.com/hosseinmd/prettier-plugin-jsdoc#options */
  tsdoc: true,
  jsdocVerticalAlignment: true,
  jsdocCapitalizeDescription: false,
  jsdocPreferCodeFences: true,
  jsdocKeepUnParseAbleExampleIndent: true,

  /** @docs https://github.com/sveltejs/prettier-plugin-svelte#options */
  svelteAllowShorthand: true,

  /** @docs https://prettier.io/docs/en/configuration.html#configuration-overrides */
  overrides: [
    { files: ['**/*.svg'], options: { parser: 'html' } },
    { files: ['**/*.svelte'], options: { parser: 'svelte' } },
  ],
};
