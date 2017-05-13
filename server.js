const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n');
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
