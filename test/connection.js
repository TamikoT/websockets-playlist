const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

// Event listener for when the connection is first made
mongoose.connection.once('open', function(){
  console.log('connection has been made! woot');
}).on('error', function(error){
  console.log('connection failed' + error);
});
