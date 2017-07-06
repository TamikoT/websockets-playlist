// dependencies
var express = require('express');
var socket = require('socket.io');

// app set up
var app = express();
var server = app.listen(3000, function(){
  console.log('listening to requests on :3000');
});

// static files
app.use(express.static('public'));

// socket server
var io = socket(server);

io.on('connection', function(socket) {
  console.log('success! connected to socket-' + socket.id );

  // fired from client side with `send` button
  socket.on('chat', function(data){
    // sending data back to ALL sockets
    io.sockets.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });
});
