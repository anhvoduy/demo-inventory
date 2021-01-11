const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || '0.0.0.0');

app.use('/', express.static(path.join(__dirname, 'admin/build'), { index: 'index.html '}));
app.get(['/', '/*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'));
});

app.listen(app.get('port'), app.get('host'), function () {
  console.log('App Inventory is running on port:' + app.get('port'));
});
