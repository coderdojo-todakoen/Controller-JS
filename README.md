# micro:bitをJavaScriptでコントロールする
Web Bluetooth APIを使用して、ブラウザとmicro:bitの間でBluetooth通信をおこないます。  
ブラウザ上で押されたボタンの情報をmicro:bitへ送信して、micro:bitをコントロールします。  

ブラウザ上のボタンが押されると、次の文字をmicro:bitへ送信します。  

|ボタン|送信する文字列|
|---|---|
|↑|'+U'|
|←|'+L'|
|→|'+R'|
|↓|'+D'|
|A|'+A'|
|B|'+B'|  
  
ボタンが離されると、次の文字をmicro:bitへ送信します。  

|ボタン|送信する文字列|
|---|---|
|↑|'-U'|
|←|'-L'|
|→|'-R'|
|↓|'-D'|
|A|'-A'|
|B|'-B'|  
  
micro:bit側で、受け取った文字列に対応する処理をおこないますが、ここでは単純にブラウザ上でボタンが押された・離されたタイミングでどのボタンが扱われたかをmicro:bitに表示します。  

## 動作環境
### MacOS
- MacOS Catalina 10.15.6
- Google Chrome 84
でのみ動作確認をおこないました。Android端末や、Windows版のChromeやEdgeでも動作すると思います。  

BluetoothをONにしてください。

### micro:bit
microbitフォルダにあるhexファイルを、micro:bitに書き込みます。

## 動作方法
- あらかじめmicro:bit用のバイナリファイルをmicro:bitに書き込んでください。
- ChromeのようなWeb Bluetooth APIに対応したブラウザを使用して、https://coderdojo-todakoen.github.io/Controller-JS/ へアクセスします。
- 画面右上の[接続]ボタンをクリックして、一覧に表示されたデバイスを選択します。