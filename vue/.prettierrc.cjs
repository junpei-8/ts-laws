/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    /** @npm https://www.npmjs.com/package/prettier-plugin-jsdoc */
    require.resolve('prettier-plugin-jsdoc'),

    /** @npm https://www.npmjs.com/package/prettier-plugin-organize-attributes */
    require.resolve('prettier-plugin-organize-attributes'),
  ],

  /** @docs https://prettier.io/docs/en/options */
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',

  /** @docs https://github.com/hosseinmd/prettier-plugin-jsdoc#options */
  tsdoc: true,
  jsdocVerticalAlignment: true,
  jsdocCapitalizeDescription: false,
  jsdocPreferCodeFences: true,
  jsdocKeepUnParseAbleExampleIndent: true,

  /**
   * @docs https://github.com/NiklasPor/prettier-plugin-organize-attributes#usage
   * @refs https://vuejs.org/style-guide/rules-recommended.html#element-attribute-order
   */
  attributeGroups: [
    '^(is|:is)$',
    '^v-for$',
    '^v-if$',
    '^v-else-if$',
    '^v-else$',
    '^v-show$',
    '^v-cloak$',
    '^v-pre$',
    '^v-once$',
    '^v-slot$',
    '^(ref|:ref)$',
    '^(key|:key)$',
    '^(id|:id)$',
    '^(for|:for)$',
    '^(name|:name)$',
    '^(class|:class)$',
    '$DEFAULT',
    '^aria-',
    '^data-',
    '^v-model$',
    '^v-model:',
    '^v-bind$',
    '^v-bind:',
    '^:',
    '^@',
    '^v-on:',
    '^v-html',
    '^v-text',
  ],

  /** @docs https://prettier.io/docs/en/configuration.html#configuration-overrides */
  overrides: [{ files: ['**/*.svg'], options: { parser: 'html' } }],
};
