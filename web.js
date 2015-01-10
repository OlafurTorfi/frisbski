'use strict';
var express = require('express'), http = require('http'), gzippo = require('gzippo');

var app = express();
app.use(gzippo.staticGzip(__dirname + '/app'));
app.use(express.static(__dirname + '/app'));
//app.get('/',express.static('/app/index.html'));

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);

console.log('listening on port 5000');