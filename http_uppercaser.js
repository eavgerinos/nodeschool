var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method == "POST") {
    req.pipe(map(function (body) {
      return body.toString().toUpperCase();
    })).pipe(res)
    }
  });

server.listen(port);
