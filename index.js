var portNumber = process.env.NODE_101_PORT;
var http = require('http');

var server = http.createServer(function(req, res) {
  res.write("Hello there");
  res.end();
});

server.listen(portNumber);

console.log('Server listening on port ', portNumber);
