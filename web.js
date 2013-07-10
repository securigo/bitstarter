fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var buffer = fs.readFilesync('index.html', 'utf8').tostring();



app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
