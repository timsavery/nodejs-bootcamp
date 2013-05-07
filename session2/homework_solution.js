var http = require('http'),
		url = require('url');

http.createServer(function(req, res) {
	if (url.parse(req.url).pathname === '/echo' && req.method === 'POST') {
		var body = '';
		req.on('data', function(data) {
			body += data;
		});

		req.on('end', function() {
			res.writeHead(200);
			res.end(body);
		});
	} else {
		res.writeHead(404);
		res.end();
	}
}).listen(8080);