const http = require ('http');

const port = 8082;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Conten-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
