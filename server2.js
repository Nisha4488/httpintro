const http = require('http');
const port = process.env.PORT || 8000;


const server = http.createServer(function(req, res) {

  if(req.method === "GET" && req.url === "/hello"){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');

  }else if (req.url === "/user"){
    let user = {
      name: "Kevin",
      age: 23,
      password: "P@55VV0RD"
    }

    let stringUser = JSON.stringify(user);
    res.setHeader("Content-Type", 'application/json');
    res.end(stringUser);

  }else{
    res.setHeader('Content-Type', 'text/plain');
    res.end('Route not found');
  }

});

server.listen(port, function() {
  console.log('Listening on port', port);
});
