const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 8080);

// const siteApp = path.join(__dirname, 'pushcoins/build');
// app.use('/', express.static(siteApp, { index: 'index.html '}));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'pushcoins/build', 'index.html'));
// });

const siteAdmin = path.join(__dirname, 'admin/build');
app.use('/', express.static(siteAdmin, { index: 'index.html '}));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'));
});

app.listen(app.get('port'), function () {
  console.log('React Coins is running on port:' + app.get('port'));
});