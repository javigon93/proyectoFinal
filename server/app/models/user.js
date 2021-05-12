const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    password: String,
    
});

let User = mongoose.model('users', userSchema);
module.exports = User;

