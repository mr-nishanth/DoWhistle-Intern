const mongoose = require('mongoose');

// create a user schema for user collection
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => new Date.now()
    },
    updatedAt: {
        type: Date,
    },
    bestFriends: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
    hobbies: {
        type: [String]
    },
    address: {
        city: String,
        street: String,
        pin_code: Number,
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel