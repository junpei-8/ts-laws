# Vue

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)

<br />

## Prettier

- [`prettier`](https://www.npmjs.com/package/prettier)
- [`prettier-plugin-jsdoc`](https://www.npmjs.com/package/prettier-plugin-jsdoc)
- [`prettier-plugin-organize-attributes`](https://www.npmjs.com/package/prettier-plugin-organize-attributes)

```bash
npm i -D prettier prettier-plugin-jsdoc prettier-plugin-organize-attributes
```

<br />

## Eslint

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier)
- [`@vue/eslint-config-typescript`](https://www.npmjs.com/package/@vue/eslint-config-typescript)

```bash
npm i -D eslint eslint-plugin-vue eslint-plugin-prettier @vue/eslint-config-typescript
```

<br />

## Typescript Config

⚠️ Vue では `tsconfig.json` を調整しておらず、`pnpm create vue` で生成したものを使用している。

- [`typescript`](https://www.npmjs.com/package/typescript)
- [`@tsconfig/node18`](https://www.npmjs.com/package/@tsconfig/node18)
- [`@vue/tsconfig`](https://www.npmjs.com/package/@vue/tsconfig)
- [`@types/node`](https://www.npmjs.com/package/@types/node)

```bash
npm i -D typescript @tsconfig/node18 @vue/tsconfig @types/node
```

<br />

## 使用したテンプレート

`pnpm create vue` を実行し作成したプロジェクトを使用。

### 生成時のコマンド

<img alt="テンプレート生成時に選択した選択肢の画像" src="./docs/images/generate-template-command-log.png" />

<details>
  <summary><b>テキストログ</b></summary>
<div>

```zsh
✔ Project name: … vue
✔ Add TypeScript? …  Yes
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
```

</div>
</details>
