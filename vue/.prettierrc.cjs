/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    /** @npm https://www.npmjs.com/package/prettier-plugin-organize-attributes */
    require.resolve('prettier-plugin-organize-attributes'),

    /** @npm https://www.npmjs.com/package/prettier-plugin-jsdoc */
    require.resolve('prettier-plugin-jsdoc'),
  ],

  /** @docs https://prettier.io/docs/en/options */
  printWidth: 80,
  tabWidth: 1,
  useTabs: true,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',

  /** @docs https://github.com/NiklasPor/prettier-plugin-organize-attributes#usage */
  attributeGroups: ['^id$', '^class$', '^name$', '$DEFAULT', '^data-', '^aria-'],

  /** @docs https://github.com/hosseinmd/prettier-plugin-jsdoc#options */
  tsdoc: true,
  jsdocVerticalAlignment: true,
  jsdocCapitalizeDescription: false,
  jsdocPreferCodeFences: true,
  jsdocKeepUnParseAbleExampleIndent: true,

  /** @docs https://github.com/withastro/prettier-plugin-astro#configuration */
  astroAllowShorthand: false,

  /** @docs https://prettier.io/docs/en/configuration.html#configuration-overrides */
  overrides: [
    { files: ['**/*.svg'], options: { parser: 'html' } },
  ],
};
