var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create schema and model
const UserSchema = new Schema({
  username: String,
  votes: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
