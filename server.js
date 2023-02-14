const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // check if the request URL is for the home page
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(filePath);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  } 
  // check if the request URL is for second.html
  else if (req.url === '/second.html') {
    const filePath = path.join(__dirname, 'second.html');
    const readStream = fs.createReadStream(filePath);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  }
  // check if the request URL is for third.html
  else if (req.url === '/third.html') {
    const filePath = path.join(__dirname, 'third.html');
    const readStream = fs.createReadStream(filePath);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  } 
  // handle all other requests
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
