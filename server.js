var http = require('http')
var react = require('react')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(react.rednerToStirng('Hello World\n');
}).listen(port);

