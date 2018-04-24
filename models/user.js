var mongoose = require('mongoose');
var UserSchema = mongoose.Schema;

var userSchema = new UserSchema({
    email: {type: String, require: true},
    password: {type: String, require: true}
});

module.exports = mongoose.model('Product', userSchema);