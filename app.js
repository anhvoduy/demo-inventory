const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const reportService = require('./services/reportService');
const appInfo = require('./package.json');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || PORT);
app.set('host', process.env.HOST || HOST);

app.get('/api/status', (req, res, next) => {
  return res.send({
    success: true,
    version: appInfo.version
  });
});

app.post('/api/create-pdf', async (req, res) => {
  let data = await reportService.export_rpt001(req.body);
  return res.send({
    success: true,
    data: data
  });
});

app.get('/api/fetch-pdf', (req, res, next) => {
  res.sendFile(`${__dirname}/exports/rpt001.pdf`);
});

app.use('/', express.static(path.join(__dirname, 'admin/build'), { index: 'index.html '}));
app.get(['/', '/*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'));
});

app.listen(app.get('port'), app.get('host'), function () {
  console.log('App Inventory is running on port:' + app.get('port'));
});
