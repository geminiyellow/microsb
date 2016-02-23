var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Welcome to www.ilivebox.net");
});

var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
