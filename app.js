const express = require('express');
const http = require('http');
const path = require("path");

const app = express();
app.set('port', process.env.PORT || 9090);

const webpath = path.join(__dirname, 'build');
app.use('/', express.static(webpath, { index: 'index.html' }));
app.get('/', function (req, res) {
    res.sendFile(path.join(webpath, 'index.html'));
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('React Hook is running on port:' + app.get('port'));
});


// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8080);