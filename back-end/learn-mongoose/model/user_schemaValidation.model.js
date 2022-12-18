const mongoose = require('mongoose');

// create a user schema for user collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 10,
        max: 60
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // uppercase: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
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
    },
})

const userModel = mongoose.model('User_schema_validation', userSchema);

module.exports = userModel