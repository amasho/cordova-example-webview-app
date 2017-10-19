# セットアップ

* Nodeバージョン：v8.6.0
* Cordovaバージョン：v7.1.0

## 事前作業

### iOS Simulatorのインストール
```
$ brew install ios-sim
```

### Android Studioのインストール
```
https://developer.android.com/studio/index.html?hl=ja
```

### cordovaのインストール
```
# for npm
$ npm install -g cordova

# for yarn
$ yarn global add cordova
```

### リポジトリを取得
```
$ git clone https://github.com/amasho/cordova-example-webview-app.git
```

### cordova platformのインストール
```
# iOS
$ cordova platforms add ios

# And
$ cordova platforms add android
```

### Node周りのインストール
```
# for npm
$ npm i

#for yarn
$ yarn install
```

# ビルド周り

### developmentビルド
```
$ npm run build:dev:assets
```

### productionビルド
```
$ npm run build:prd:assets
```

### cordovaアプリをブラウザで確認
```
$ npm run serve

http://localhost:8000
にアクセスして確認
```

### ファイル監視＆反映
```
$ npm run watch
```

