var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(){

});


app.get('/', function (req, res) {
  res.send('hi');
});

server.listen(3000);
