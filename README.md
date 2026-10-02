# @software-platform-oss/incus-japan-site

Incusの導入・移行・運用方法を日本語で案内できます。

## 利用前の確認

実装済みの範囲、必要な依存関係、検証コマンドを以下の英語説明に併記しています。操作・配備・公開は、それぞれの権限と設定を確認してから実施してください。

現在の依存設定にはGit対象外のローカル成果物が含まれます。配布経路が整うまでは、cloneだけで依存を導入できません。

## 使い方

リポジトリ内のサンプル・スキーマ・実装を確認し、用途に必要な入力を明示して利用します。下記のGetting startedに、現行設定に対応する検証コマンドを示しています。

検証結果は実行した範囲だけを示します。未実装の機能、未設定の接続、配備環境の確認を合格扱いにしないでください。

## English

Provide Japanese guidance for adopting, migrating and operating Incus.

## What you can do

- Maintain reviewed overview and getting-started content.
- Validate Japanese/English content and preview the configured site.

## Current scope

Operational examples require review for the reader’s own environment. The required localized-site package is referenced as an excluded local archive; a fresh clone cannot install it until an approved distribution path is available. No deployment is performed by these instructions.

## Getting started

The manifest currently requires locally supplied package archives: `@nuxtjp/localized-site`. These archives are excluded from Git. Obtain the exact approved dependency artifacts before installing; a fresh clone alone is not sufficient. Registry distribution remains pending.

Use `pnpm@10.29.3` and the Node.js version declared in `engines` in `package.json`. Run from this repository:

```sh
pnpm install --frozen-lockfile
pnpm validate:content
pnpm typecheck
pnpm test
pnpm build
```

## Documentation and source

[Usage guide](docs/getting-started.md)

[Verification cases](test) · [Contributing](CONTRIBUTING.md) · [Security reporting](SECURITY.md) · [License](LICENSE) · [Attribution notices](NOTICE)
