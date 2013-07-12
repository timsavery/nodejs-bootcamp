var Readable = require('stream').Readable;

var rs = new Readable();
rs.push('this ');
rs.push('is a ');
rs.push('test\n');
rs.push(null);

rs.pipe(process.stdout);
