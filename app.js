const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 9090);

app.use(express.static(path.join(__dirname, 'build')));

// https://facebook.github.io/create-react-app/docs/deployment
// Express example above to serve index.html for any unknown paths
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'), function () {
  console.log('React Hook is running on port:' + app.get('port'));
});