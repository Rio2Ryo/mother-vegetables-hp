# LogiMoPro → Google Sheets スクレイパー

LogiMoProの配送一覧ページから「配送先氏名」「お問合せ番号」を取得し、  
Google Spreadsheetの「情報」タブに書き込むスクリプトです。

## セットアップ

### 1. 依存パッケージのインストール

```bash
cd scraper
npm install
npx playwright install chromium
```

### 2. Google Cloud サービスアカウントの設定

1. [Google Cloud Console](https://console.cloud.google.com/) にアクセス
2. プロジェクトを作成（または既存を選択）
3. **Google Sheets API** を有効化
4. 「IAM と管理」→「サービスアカウント」→ 新規作成
5. キー（JSON形式）をダウンロードし、`scraper/service-account-key.json` として保存
6. サービスアカウントのメールアドレスをスプレッドシートの共有設定で **編集者** として追加

### 3. 環境変数の確認

`scraper/.env` ファイルにログイン情報等が設定されていることを確認してください。

## 実行

```bash
cd scraper
npm start
```

またはNode.jsで直接実行:

```bash
node scrape-logimopro.js
```

## 出力

- A列: 配送先氏名
- B列: お問合せ番号
- A2:B2 から下方向に末尾追加されます
