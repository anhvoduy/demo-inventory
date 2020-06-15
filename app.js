const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 8080);

/* register web app */
app.use('/', express.static(path.join(__dirname, 'admin/build/'), { index: 'index.html' }));
app.get(['/', '/*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'admin/build/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('React App Inventory is running on port:' + app.get('port'));
});