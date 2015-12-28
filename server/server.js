const SERVER = require('http').createServer();
const FS = require('fs');

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

exports.OnStart = function(port, host) {
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
    SERVER.listen(port, host);
    console.log("server listening ...");
}

