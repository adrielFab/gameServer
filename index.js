var app = require('express')();
var io = require('socket.io')(http);
var cors = require('cors');

app.use(cors());
var http = require('http').Server(app);
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//Allow cross domain requests
io.set('transports', [ 'websocket' ]);

io.on('connection', function(socket){
  console.log('connected');
  socket.on('teamInformation', function(teamName){
    console.log('message: ' + teamName);
    io.emit('newTeam', teamName);
  });
});
