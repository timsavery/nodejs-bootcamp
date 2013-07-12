var fs = require('fs');

var source = fs.createReadStream(__dirname + '/data.txt');
var destination = fs.createWriteStream(__dirname + '/data_copy.txt');

source.pipe(destination);
