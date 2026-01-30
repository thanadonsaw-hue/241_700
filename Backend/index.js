const http = require('http');
const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello World! This is my first Node.js server!');
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});