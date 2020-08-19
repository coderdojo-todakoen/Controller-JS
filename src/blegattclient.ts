export default class BLEGATTClient {
  static readonly UART_SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
  static readonly UART_TX_CHARACTERISTIC_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
  static readonly UART_RX_CHARACTERISTIC_UUID = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';

  device = null;
  connected = false;
  rxCharacteristic = null;

  async connectDevice() {
    if (navigator.bluetooth == null) {
      alert('Chromeなどの、Web Bluetooth APIに対応したブラウザを使用してください。');
      return;
    }

    try {
      console.log('requestDevice');
      this.device = await navigator.bluetooth.requestDevice({
        filters: [
          // servicesを設定すると、デバイスの一覧に表示されない???
          //{ services: [BLEGATTClient.UART_SERVICE_UUID] },
          { namePrefix: 'BBC micro:bit' }
        ],
        optionalServices: [BLEGATTClient.UART_SERVICE_UUID]
      });

      console.log('connect');
      const server = await this.device.gatt.connect();
      this.connected = true;

      this.device.addEventListener('gattserverdisconnected', (ev) => {
        // micro:bitとの接続が解除されたら呼び出されます
        console.log('disconnected');
        this.connected = false;
      })

      // micro:bitのUARTサービスを取得します
      console.log('getPrimaryService(UART_SERVICE_UUID)');
      const uartService = await server.getPrimaryService(BLEGATTClient.UART_SERVICE_UUID);

      // micro:bitへバイト配列を送信するよう設定します
      console.log('getCharacteristic(UART_RX_CHARACTERISTIC_UUID)');
      this.rxCharacteristic = await uartService.getCharacteristic(BLEGATTClient.UART_RX_CHARACTERISTIC_UUID);

      // micro:bitからバイト配列を受け取るよう設定します
      console.log('getCharacteristic(UART_TX_CHARACTERISTIC_UUID)');
      const txCharacteristic = await uartService.getCharacteristic(BLEGATTClient.UART_TX_CHARACTERISTIC_UUID);

      console.log('startNotifications');
      await txCharacteristic.startNotifications();

      txCharacteristic.addEventListener('characteristicvaluechanged', (ev) => {
        // micro:bitからバイト配列を受け取ったら呼び出されます
        const value = ev.target.value;
        console.log('received:' + value.byteLength);
        console.log(new TextDecoder().decode(value.buffer));
      });
    } catch (error) {
      console.log(error);
    }
  }

  async disconnectDevice() {
    if (navigator.bluetooth == null) {
      alert('Chromeなどの、Web Bluetooth APIに対応したブラウザを使用してください。');
      return;
    }

    if (!this.connected) {
      return;
    }

    // 接続を解除します
    console.log('disconnect');
    await this.device.gatt.disconnect();
  }

  async send(str: string) {
    if (!this.connected) {
      return;
    }

    try {
      // 文字列をmicro:bitへ送信します
      console.log('write:' + str);
      const bytes = new TextEncoder().encode(str);
      await this.rxCharacteristic.writeValue(bytes);
    } catch (error) {
      console.log(error);
    }
  }
}
