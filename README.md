# Astro x microCMS (w/ Cloudflare Pages)

## 🛠 技術スタック

- **Astro** - モダンな静的サイトジェネレーター
- **microCMS** - コンテンツ管理のためのヘッドレスCMS
- **Cloudflare Pages** - デプロイメント＆ホスティングプラットフォーム

## 🚀 ローカル開発環境のセットアップ

1. リポジトリをクローン

```sh
git clone https://github.com/shibaTT/astro-microcms-netlify-blog.git
cd astro-microcms-netlify-blog
```

2. 依存パッケージをインストール

```sh
npm install
```

3. .env.exampleをコピーして.envファイルを作成

```sh
cp .env.example .env
```

4. .envファイルにmicroCMSのAPIキーを設定
5. 開発サーバーを起動

```sh
npm run dev
```

## ⚠️ 重要な注意点

- CMS連携には環境変数の設定が必須です
- コンテンツスキーマはmicroCMSの設定と一致させる必要があります
- プレビューモードを使用するにはCloudflareの追加設定が必要です

## 🚀 プロジェクト構成

Astroプロジェクトの主な構成は以下の通りです：

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astroプロジェクトの構成詳細については、[公式ドキュメント](https://docs.astro.build/ja/basics/project-structure/)を参照してください。

## 🧞 コマンド一覧

すべてのコマンドはプロジェクトルートで実行します：

| コマンド                  | 説明                           |
| :------------------------ | :----------------------------- |
| `npm install`             | 依存パッケージをインストール   |
| `npm run dev`             | ローカル開発サーバーを起動     |
| `npm run build`           | 本番用ビルドを./distに生成     |
| `npm run preview`         | デプロイ前のビルドをプレビュー |
| `npm run astro ...`       | Astro CLIコマンドを実行        |
| `npm run astro -- --help` | Astro CLIのヘルプを表示        |
