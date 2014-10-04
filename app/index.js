var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static('public'));
app.use(express.static('public/dist'));

io.on('connection', function(){

});


app.get('*', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.resolve('./public/dist/index.html'));
});

server.listen(3000, function () {
  console.log('server on port 3000');
});
