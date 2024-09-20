## 環境構築

```
// リポジトリをクローンする
git clone git@github.com:scla-sagauniv/Location-information-stamp-app.git

// dockerイメージ作成
docker compose build

// dockerコンテナを立ち上げる
docker compose up
```

## ライブラリをインストールする

```
// コンテナの中に入る
docker compose exec location-stamp-app sh
// ライブラリをインストール
npm i { ライブラリ名 }
```
