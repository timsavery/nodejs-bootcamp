var http = require('http'),
		url = require('url');

http.createServer(function (req, res) {
	var path = url.parse(req.url).pathname;

	switch (path) {
		'/block': {
			var startTime = new Date().getTime();
			while (new Date().getTime() - startTime < 10000);

			return res.end('I just blocked the entire server!');
		}

		'/': {
			return res.end('Hello!');
		}
	}
}).listen(8080);