const { createServer } = require('node:http');
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const backendUrl = 'http://backend:5000';

  http.get(backendUrl, (backendRes) => {
    let data = '';
    backendRes.on('data', (chunk) => {
      data += chunk;
    });
    backendRes.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    });
  }).on('error', (err) => {
    console.error(`Error accessing backend: ${err}`);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
