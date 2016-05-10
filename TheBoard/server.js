var http = require('http');
var port = process.env.port || 1337;
var express = require("express");
var app = express();

app.get("/", function(req,res) {

//    res.end('Hello World\n');
res.send("<html><body><h1>Get Data</h1></body></html>");
});

var server = http.createServer(app);
server.listen(port);

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
//# sourceMappingURL=server.js.map