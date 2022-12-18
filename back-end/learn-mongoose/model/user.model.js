const mongoose = require('mongoose');

// create a user schema for user collection
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel