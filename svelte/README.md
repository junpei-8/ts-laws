# Svelte

- **[Prettier](#prettier)**

  - https://prettier.io

- **[ESLint](#eslint)**

  - https://eslint.org

- **[Stylelint](#stylelint)**

  - https://stylelint.io

<br />

## Prettier

### Config File

- [`./.prettierrc.cjs`](./.prettierrc.cjs)
- [`./.prettierignore`](./.prettierignore)

### Module

#### Base

- [`prettier`](https://www.npmjs.com/package/prettier)

#### Plugins

- [`prettier-plugin-jsdoc`](https://www.npmjs.com/package/prettier-plugin-jsdoc)

#### Plugins for Svelte

- [`prettier-plugin-svelte`](https://www.npmjs.com/package/prettier-plugin-svelte)

#### Installation

```bash
npm i -D prettier prettier-plugin-jsdoc prettier-plugin-svelte
```

<br />

## ESLint

### Config File

- [`./.eslintrc.cjs`](./.eslintrc.cjs)
- [`./.eslintignore`](./.eslintignore)

### Module

#### Base

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`@rushstack/eslint-patch`](https://www.npmjs.com/package/@rushstack/eslint-patch)
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)

#### Plugins

- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript)
- [`eslint-plugin-sort-keys-custom-order`](https://www.npmjs.com/package/eslint-plugin-sort-keys-custom-order)
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)

#### Plugins for Svelte

- [`eslint-plugin-svelte`](https://www.npmjs.com/package/eslint-plugin-svelte)

#### Installation

```bash
npm i -D eslint @rushstack/eslint-patch eslint-config-prettier eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-sort-keys-custom-order @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-svelte
```

<br />

## Stylelint

### Config File

- [`./.stylelintrc.cjs`](./.stylelintrc.cjs)
- [`./.stylelintignore`](./.stylelintignore)

### Module

#### Base

- [`stylelint`](https://www.npmjs.com/package/stylelint)

#### Plugins

- [`stylelint-config-html`](https://www.npmjs.com/package/stylelint-config-html)
- [`stylelint-config-recess-order`](https://www.npmjs.com/package/stylelint-config-recess-order)
- [`stylelint-declaration-block-no-ignored-properties`](https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties)

#### Installation

```bash
npm i -D stylelint stylelint-config-html stylelint-config-recess-order stylelint-declaration-block-no-ignored-properties
```

<br />

## Typescript Config

⚠️ Typescript Config は調整しておらず、テンプレートの設定を流用しているだけ

### Config File

- [`./tsconfig.json`](./tsconfig.json)
- [`./tsconfig.node.json`](./tsconfig.node.json)

### Module

#### Base

- [`typescript`](https://www.npmjs.com/package/typescript)

#### Configs

- [`@tsconfig/svelte`](https://www.npmjs.com/package/@tsconfig/svelte)

```bash
npm i -D typescript @tsconfig/svelte
```

<br />

## VSCode Config

### Config File

- [`./.vscode/settings.json`](./.vscode/settings.json)

### Recommend Extension

- [`./.vscode/extensions.json`](./.vscode/extensions.json)

<br />

## Commands

### Module

#### Plugins

- [`concurrently`](https://www.npmjs.com/package/concurrently)

#### Installation

```bash
npm i -D concurrently
```

### `check`

`vue-tsc`・`prettier`・`eslint`・`prettier` を用いた静的解析を**並列**で実行する。

```bash
npm run check
```

### `format`

`prettier`・`eslint`・`prettier` を用いたフォーマットを**並列**で実行する。

```bash
npm run format
```

<br>

## 使用したテンプレート

`pnpm create vite` を実行し作成したプロジェクトを使用。

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
