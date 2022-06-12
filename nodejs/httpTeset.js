const http = require('node:http');

// 创建本地服务器来从其接收数据
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

server.listen(8000);
