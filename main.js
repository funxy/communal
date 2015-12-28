// server/server.js のモジュール化
const SERVER = require('./server/server');
// ポート番号
const PORT = 3000;
// 開発用ホスト名
const LOCAL_HOST = '127.0.0.1';
// エントリーポイント
SERVER.OnStart(PORT, LOCAL_HOST);

