var assert = require('assert');
var User = require('../models/user');

describe('some demo tests', function(){

  it('adds two numbers together', function(){
   assert(2 + 3 === 5);
  });

});

describe('saving records', function(){

  it('saves a record to the database', function(done){

    var testUser = new User({
      username: 'John Smith'
    });

    // because connection already exist mongoose knows which database to save to
    // writing to database is an asynchronous request so can't use assert
    // need `done` function for mocha to know to move on to next test
    testUser.save().then(function(){
      assert(user.isNew === false);
    });
    done();
  });

});
