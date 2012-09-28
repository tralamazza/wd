var http = require('http');
var ecstatic = require('ecstatic')(__dirname);
var port = process.env.port || 8337;
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  ecstatic(req, res);
}).listen(port);
console.log('listening on', port);
