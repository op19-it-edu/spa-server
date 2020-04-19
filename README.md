## 環境構築
- `npm`
  - `v6.13.4` で動作確認済
  - インストール手順（参考までに）
    - Mac：https://qiita.com/PolarBear/items/62c0416492810b7ecf7c
    - Ubuntu：https://qiita.com/seibe/items/36cef7df85fe2cefa3ea

## 操作

### 必要なパッケージをインストール（`node_modules` 生成）
`package.json` のある階層で以下を実行
```
$ npm install
```
新規でパッケージを追加したいときは
`node_modules` がある階層で以下を実行
```
$ npm install [パッケージ名]
```
- `package.json` と `package-lock.json` が自動で更新される

### テスト用サーバーを起動
`package.json` のある階層で以下を実行
```
$ npm run serve
```
- `http://localhost:3000` でアクセスできる
- 主に開発時に挙動を確認したいときに使う

### ビルドする（`dist` 生成）
`package.json` のある階層で以下を実行
```
$ npm run build
```
- 生成された `dist` ディレクトリをWebサーバ（nginxとか）のドキュメントルートに置くと、コンテンツが配信できる
- コンテナ化するときにnginxと合体させる予定

### Lint を実行
`package.json` のある階層で以下を実行
```
npm run lint
```

## パッケージについて
- `axios`
  - API通信など非同期処理に利用
- `vue-router`
  - ルーティングに利用
- `vuex`
  - コンポーネント共通の状態管理に利用
