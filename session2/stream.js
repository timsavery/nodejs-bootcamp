var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  var stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(res); 
});

server.listen(8080);


