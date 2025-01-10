const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});
server.on('request', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
