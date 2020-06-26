const express = require('express');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.set('port', process.env.PORT || PORT);
app.set('host', process.env.HOST || HOST);

app.use('/', express.static(path.join(__dirname, 'admin/build'), { index: 'index.html '}));
app.get(['/', '/*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'));
});

app.listen(app.get('port'), app.get('host'), function () {
  console.log('App Inventory is running on port:' + app.get('port'));
});