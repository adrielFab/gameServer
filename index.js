var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
  var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname, '../adrielFab.github.io/submit', 'index.html'));
});

io.on('connection', function(socket){
  socket.on('teamInformation', function(teamName){
    console.log('message: ' + teamName);
    io.emit('newTeam', teamName);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
