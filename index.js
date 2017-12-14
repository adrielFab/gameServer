var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('teamInformation', function(teamName){
    console.log('message: ' + teamName);
    io.emit('newTeam', teamName);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
