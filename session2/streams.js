var http = require('http'),
    request = require('request');

http.createServer(function(req, res) {

  request.get('http://www.google.com').pipe(res);

}).listen(8080);