let http = require('http');
let port = process.env.PORT || 8000;

let server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
