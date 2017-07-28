const mongoose = require('mongoose');

// using default ES6 promise
mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

// use hook run DB before running tests on mocha
before(function(done){
  // Event listener for when the connection is first made
  mongoose.connection.once('open', function(){
    console.log('connection has been made! woot');
    done();
  }).on('error', function(error){
    console.log('connection failed' + error);
  });
});
