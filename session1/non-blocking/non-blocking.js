var http = require('http'),
    url = require('url'),
    cp = require('child_process');

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;

  switch (path) {
    case '/block': {
      cp.exec('node wait.js', function() {
        res.end('I did not block the entire server!\n');
      });
      break;
    }

    case '/': {
      res.end('Hello!\n');
      break;
    }
  }
}).listen(8080);