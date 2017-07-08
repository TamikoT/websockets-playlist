import mongoose, {Schema} from 'mongoose';

// create schema and model
const UserSchema = new Schema({
  username:String;
  votes:Number;
});

const User = mongoose.model('user', UserSchema);

export default User;
