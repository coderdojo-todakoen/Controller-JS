import BLEGATTClient from './blegattclient';

const plugin = new BLEGATTClient();

const connect = document.getElementById('connect');
connect.addEventListener('click', () => {
  // [接続]ボタンが押された場合の処理をおこないます
  if (!plugin.connected) {
    plugin.connectDevice();
  } else {
    plugin.disconnectDevice();
  }
});

const elements = document.getElementsByClassName("action");
for (let i = 0; i != elements.length; ++i) {
  const element = elements.item(i);
  const id = element.id;
  element.addEventListener('mousedown', () => {
    // ボタンが押された場合の処理をおこないます
    // 押されたボタンに対応する送信文字を取得します
    let str = sendString(id);
    if (str == null) {
      return;
    }
    // ボタンが押されたので、'+'文字と
    // 押されたボタンに対応する文字を送信します
    plugin.send('+' + str + '\n');
  });
  element.addEventListener('mouseup', () => {
    // ボタンが離された場合の処理をおこないます
    // 離されたボタンに対応する送信文字を取得します
    let str = sendString(id);
    if (str == null) {
      return;
    }
    // ボタンが離されたので、'-'文字と
    // 離されたボタンに対応する文字を送信します
    plugin.send('-' + str + '\n');
  });
}

function sendString(id: String) {
  // ボタンのid文字列から、対応する送信文字を決定します
  switch (id) {
    case 'up':
      return 'U';
    case 'left':
      return 'L';
    case 'right':
      return 'R';
    case 'down':
      return 'D';
    case 'a':
      return 'A';
    case 'b':
      return 'B';
    default:
      break;
  }
  // 対応しないidの場合は、nullを返します
  return null;
}