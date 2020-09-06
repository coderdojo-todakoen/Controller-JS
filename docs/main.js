/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blegattclient.ts":
/*!******************************!*\
  !*** ./src/blegattclient.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar BLEGATTClient = /** @class */ (function () {\n    function BLEGATTClient() {\n        this.device = null;\n        this.connected = false;\n        this.rxCharacteristic = null;\n    }\n    BLEGATTClient.prototype.connectDevice = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, server, uartService, _b, txCharacteristic, error_1;\n            var _this = this;\n            return __generator(this, function (_c) {\n                switch (_c.label) {\n                    case 0:\n                        if (navigator.bluetooth == null) {\n                            alert('Chromeなどの、Web Bluetooth APIに対応したブラウザを使用してください。');\n                            return [2 /*return*/];\n                        }\n                        _c.label = 1;\n                    case 1:\n                        _c.trys.push([1, 8, , 9]);\n                        console.log('requestDevice');\n                        _a = this;\n                        return [4 /*yield*/, navigator.bluetooth.requestDevice({\n                                filters: [\n                                    // servicesを設定すると、デバイスの一覧に表示されない???\n                                    //{ services: [BLEGATTClient.UART_SERVICE_UUID] },\n                                    { namePrefix: 'BBC micro:bit' }\n                                ],\n                                optionalServices: [BLEGATTClient.UART_SERVICE_UUID]\n                            })];\n                    case 2:\n                        _a.device = _c.sent();\n                        console.log('connect');\n                        return [4 /*yield*/, this.device.gatt.connect()];\n                    case 3:\n                        server = _c.sent();\n                        this.connected = true;\n                        this.device.addEventListener('gattserverdisconnected', function (ev) {\n                            // micro:bitとの接続が解除されたら呼び出されます\n                            console.log('disconnected');\n                            _this.connected = false;\n                        });\n                        // micro:bitのUARTサービスを取得します\n                        console.log('getPrimaryService(UART_SERVICE_UUID)');\n                        return [4 /*yield*/, server.getPrimaryService(BLEGATTClient.UART_SERVICE_UUID)];\n                    case 4:\n                        uartService = _c.sent();\n                        // micro:bitへバイト配列を送信するよう設定します\n                        console.log('getCharacteristic(UART_RX_CHARACTERISTIC_UUID)');\n                        _b = this;\n                        return [4 /*yield*/, uartService.getCharacteristic(BLEGATTClient.UART_RX_CHARACTERISTIC_UUID)];\n                    case 5:\n                        _b.rxCharacteristic = _c.sent();\n                        // micro:bitからバイト配列を受け取るよう設定します\n                        console.log('getCharacteristic(UART_TX_CHARACTERISTIC_UUID)');\n                        return [4 /*yield*/, uartService.getCharacteristic(BLEGATTClient.UART_TX_CHARACTERISTIC_UUID)];\n                    case 6:\n                        txCharacteristic = _c.sent();\n                        console.log('startNotifications');\n                        return [4 /*yield*/, txCharacteristic.startNotifications()];\n                    case 7:\n                        _c.sent();\n                        txCharacteristic.addEventListener('characteristicvaluechanged', function (ev) {\n                            // micro:bitからバイト配列を受け取ったら呼び出されます\n                            var value = ev.target.value;\n                            console.log('received:' + value.byteLength);\n                            console.log(new TextDecoder().decode(value.buffer));\n                        });\n                        return [3 /*break*/, 9];\n                    case 8:\n                        error_1 = _c.sent();\n                        console.log(error_1);\n                        return [3 /*break*/, 9];\n                    case 9: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    BLEGATTClient.prototype.disconnectDevice = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (navigator.bluetooth == null) {\n                            alert('Chromeなどの、Web Bluetooth APIに対応したブラウザを使用してください。');\n                            return [2 /*return*/];\n                        }\n                        if (!this.connected) {\n                            return [2 /*return*/];\n                        }\n                        // 接続を解除します\n                        console.log('disconnect');\n                        return [4 /*yield*/, this.device.gatt.disconnect()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    BLEGATTClient.prototype.send = function (str) {\n        return __awaiter(this, void 0, void 0, function () {\n            var bytes, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!this.connected) {\n                            return [2 /*return*/];\n                        }\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        // 文字列をmicro:bitへ送信します\n                        console.log('write:' + str);\n                        bytes = new TextEncoder().encode(str);\n                        return [4 /*yield*/, this.rxCharacteristic.writeValue(bytes)];\n                    case 2:\n                        _a.sent();\n                        return [3 /*break*/, 4];\n                    case 3:\n                        error_2 = _a.sent();\n                        console.log(error_2);\n                        return [3 /*break*/, 4];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    BLEGATTClient.UART_SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';\n    BLEGATTClient.UART_TX_CHARACTERISTIC_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';\n    BLEGATTClient.UART_RX_CHARACTERISTIC_UUID = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';\n    return BLEGATTClient;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (BLEGATTClient);\n\n\n//# sourceURL=webpack:///./src/blegattclient.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blegattclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blegattclient */ \"./src/blegattclient.ts\");\n\nvar plugin = new _blegattclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar connect = document.getElementById('connect');\nconnect.addEventListener('click', function () {\n    // [接続]ボタンが押された場合の処理をおこないます\n    if (!plugin.connected) {\n        plugin.connectDevice();\n    }\n    else {\n        plugin.disconnectDevice();\n    }\n});\nvar elements = document.getElementsByClassName(\"action\");\nvar _loop_1 = function (i) {\n    var element = elements.item(i);\n    var id = element.id;\n    element.addEventListener('touchstart', function (e) {\n        // タッチイベントとマウスイベントの両方が発生する場合\n        // マウスイベントが発生しないようにします\n        e.preventDefault();\n        // ボタンが押された場合の処理をおこないます\n        // 押されたボタンに対応する送信文字を取得します\n        var str = sendString(id);\n        if (str == null) {\n            return;\n        }\n        // ボタンが押されたので、'+'文字と\n        // 押されたボタンに対応する文字を送信します\n        plugin.send('+' + str + '\\n');\n    });\n    element.addEventListener('touchend', function (e) {\n        // タッチイベントとマウスイベントの両方が発生する場合\n        // マウスイベントが発生しないようにします\n        e.preventDefault();\n        // ボタンが離された場合の処理をおこないます\n        // 離されたボタンに対応する送信文字を取得します\n        var str = sendString(id);\n        if (str == null) {\n            return;\n        }\n        // ボタンが離されたので、'-'文字と\n        // 離されたボタンに対応する文字を送信します\n        plugin.send('-' + str + '\\n');\n    });\n    element.addEventListener('mousedown', function (e) {\n        // ボタンが押された場合の処理をおこないます\n        // 押されたボタンに対応する送信文字を取得します\n        var str = sendString(id);\n        if (str == null) {\n            return;\n        }\n        // ボタンが押されたので、'+'文字と\n        // 押されたボタンに対応する文字を送信します\n        plugin.send('+' + str + '\\n');\n    });\n    element.addEventListener('mouseup', function (e) {\n        // ボタンが離された場合の処理をおこないます\n        // 離されたボタンに対応する送信文字を取得します\n        var str = sendString(id);\n        if (str == null) {\n            return;\n        }\n        // ボタンが離されたので、'-'文字と\n        // 離されたボタンに対応する文字を送信します\n        plugin.send('-' + str + '\\n');\n    });\n};\nfor (var i = 0; i != elements.length; ++i) {\n    _loop_1(i);\n}\ndocument.addEventListener('contextmenu', function (e) {\n    // 操作時に混乱するため、コンテキストメニューが\n    // 表示されないようにします\n    e.preventDefault();\n});\nfunction sendString(id) {\n    // ボタンのid文字列から、対応する送信文字を決定します\n    switch (id) {\n        case 'up':\n            return 'U';\n        case 'left':\n            return 'L';\n        case 'right':\n            return 'R';\n        case 'down':\n            return 'D';\n        case 'a':\n            return 'A';\n        case 'b':\n            return 'B';\n        default:\n            break;\n    }\n    // 対応しないidの場合は、nullを返します\n    return null;\n}\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });