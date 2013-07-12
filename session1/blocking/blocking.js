var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;

  switch (path) {
    case '/block': {
      var startTime = new Date().getTime();
      while (new Date().getTime() - startTime < 5000);

      return res.end('I just blocked the entire server!\n');
    }

    case '/': {
      return res.end('Hello!\n');
    }
  }
}).listen(8080);
