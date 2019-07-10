const express = require('express');
const http = require('http');
const path = require("path");

const server = express();
server.set('port', process.env.PORT || 9090);

const webpath = path.join(__dirname, 'build');
server.use('/', express.static(webpath, { index: 'index.html' }));
server.get('*', function (req, res) {
    res.sendFile(path.join(webpath, 'index.html'));
});

http.createServer(server).listen(server.get('port'), function () {
    console.log('React Hook is running on port:' + server.get('port'));
});