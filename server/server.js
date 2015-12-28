const SERVER = require('http').createServer();
const FS = require('fs');

// ポート番号
const PORT = 3000;
// ローカルホスト
const LOCAL_HOST = '127.0.0.1';

// ファイルの表示
function fileOpen(path, res) {
    console.log(path);
    FS.readFile(path, 'utf-8', function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("Solly...");
            res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}

SERVER.on('request', function(req, res) {
    // URL に対応したファイルを開く
    switch(req.url) {
        case '/':
            fileOpen('./client/index.html', res);
            break;
        case '/test':
            fileOpen('./client/test.html', res);
            break;
        default:
            break;
    }
});
SERVER.listen(PORT, LOCAL_HOST);
console.log("server listening ...");

