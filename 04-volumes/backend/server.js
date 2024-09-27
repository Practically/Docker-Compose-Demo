const { createServer } = require('node:http');
const fs = require('fs');
const readline = require('readline');

const hostname = '0.0.0.0';
const port = 5000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const logFilePath = '/home/node/app/logs/access.log';

  const clientIP = req.socket.remoteAddress;
  const timestamp = new Date().toISOString();

  fs.access(logFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.writeFile(logFilePath, '', (err) => {
          if (err) {
            console.error('Error creating access log file:', err);
          }
        });
      } else {
        console.error('Error checking access log file:', err);
      }
    }
  });

  fs.appendFile(logFilePath, `[${timestamp}] Connection from ${clientIP}\n`, (err) => {
    if (err) {
      console.error('Error writing to access log:', err);
    }
  });

  const lineReader = readline.createInterface({
    input: fs.createReadStream(logFilePath),
  });

  let lineCount = 0;

  lineReader.on('line', () => {
    lineCount++;
  });

  lineReader.on('close', () => {
    res.end('The backend server has received ' + lineCount + ' requests.');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
