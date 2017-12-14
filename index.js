var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

const port = process.env.PORT || 3008;

app.get('/', function(req, res){
  var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

io.on('connection', function(socket){
  socket.on('teamInformation', function(teamName){
    console.log('message: ' + teamName);
    io.emit('newTeam', teamName);
  });
});

http.listen(port, function(){
  console.log('Listening On *:' + port);
});
