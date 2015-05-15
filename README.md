# jikkyo

![jikkyo](http://rot1024.com/jikkyo/images/kinmoza_min.jpg)

ニコニコ動画から取得したコメントファイルやTwitterのタイムラインを、透明なウィンドウの上にニコニコ動画コメント風に流せる実況閲覧アプリです。

[jikkyo Webページ](https://rot1024.github.io/jikkyo/)

## 特徴

* Windows / Mac / Linux で動作します。
* 透明なウィンドウに好きな動画を重ねて実況が楽しめます。
* コメントの速度や文字サイズなどを細かく設定できます。

### ファイルモード

* ニコニコ動画のコメントファイル（XML）が読み込めます。
* コメントの盛り上がりをシークバーの背景に色で可視化します。
* ドラッグアンドドロップでコメントファイルを読み込めます。
* ニコニコ動画コメントの各種コマンドに対応。

### Twitterモード

* TwitterのTLをリアルタイムにコメントとして流せます。
* UserStream と FilterStream に対応。
* TLを録画してファイルに保存できます。
* テキスト・ユーザー名・クライアント名によるミュート機能が使えます。
* **イベントなどでスクリーンに映すと盛り上がります！**

## 注意点

* Macではウィンドウの最大化機能に問題があり、現在無効にしています。
* Linuxでの動作はまだ未検証です。

## 更新履歴
* v1.0.0 (2015/05/15) 公開

## GitHub

このアプリケーションはオープンソースで、 [MIT License](LICENSE) の下 GitHub にてソースコードを公開しています。

https://github.com/rot1024/jikkyo

バグ等が見つかりましたら、作者の Twitter [@aayh](htt@://twitter.com/aayh) にお知らせいただくか、 GitHub の issue に投げてください。

## For Developers

```sh
git clone https://github.com/rot1024/jikkyo.git
cd jikkyo
npm i
cd src
npm i
npm start

# Building
gulp release
```

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

[MIT License](LICENSE)
