# TS Laws

Linter・Formatter のプリセットリポジトリ。

テンプレートのような使い方ができるように考慮するが、あくまで、実装確認用として使う。

<br />

## 使い方

- カキコ中...

<br />

## 作業方法

VSCode で [`./.vscode/main.code-workspace`](.vscode/main.code-workspace) を開き、右下に表示される `Open Workspace` をクリックし、ワークスペースを開いてから作業を行う。

<br />

## 構成時に意識すること

- どのプロジェクトでも共通して使うことのできる汎用性の高いプラグインを使用する。
  - Linter・Formatter はプロジェクトにより最適解が異なるため。

- プラグインの数を可能な限り少なく

  - 使用するプラグインが多くなってしまうと、複雑性が増し、後に更新・修正を加える際や第三者が編集する際などにかかるコストが増えてしまうため、プリセットとしての役割が果たせない。
