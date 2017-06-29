// make connection
var socket = io.connect('http://localhost:3000');

// query dom
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// emit events to server
btn.addEventListener('click', function(){
  // console.log(message.value);
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
  message.value = "";
});

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
});


socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing',function(data){
  feedback.innerHTML = '<p>' + data + ' is typing...</p>';
});
