
var http = require('http');

var url = require('url');

http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;

    console.log('Request fro ' + pathname + ' received.');

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('hello world');

    res.end();



}).listen(3000);
// just update this file
