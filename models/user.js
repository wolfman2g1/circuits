var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    user_fn: String,
    user_ln: String,
    username: String,
    Password: String,
    admin: Boolean,
}):

module.exports = mongoose.model('User', UserSchema);
