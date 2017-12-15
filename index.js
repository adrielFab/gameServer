var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

const port = process.env.PORT || 3010;

app.get('/', function(req, res){
  var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

io.on('connection', function(socket){
  socket.on('teamInformation', function(teamName){
    io.emit('newTeam', teamName);
  });
  socket.on('awardPoint', function(teamName){
    io.emit('getPoint', teamName);
  });
  socket.on('startRound', function(){
    console.log('round started');
    io.emit('roundStarted');
  });
  socket.on('endRound', function(){
    io.emit('roundEnded');
  });
  socket.on('submitAnswer', function(payload){
    console.log('answer submitted');
    console.log(payload);
    io.emit('answerSubmitted', payload);
  });
});

http.listen(port, function(){
  console.log('Listening On *:' + port);
});
