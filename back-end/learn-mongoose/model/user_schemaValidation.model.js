const mongoose = require('mongoose');


// Custom schema validation

//you could also use the match or the validate property for validation in the schema
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


// create a user schema for user collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [10, 'Must be at least 10, got {VALUE}'],
        max: [60, 'Must be at most 60, got {VALUE}'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address from validator'],

        validate: {
            validator: validateEmail,
            message: props => `${props.value} is not a valid email address`
        }


        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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