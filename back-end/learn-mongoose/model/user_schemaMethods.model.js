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
        validate: {
            validator: validateEmail,
            message: props => `${props.value} is not a valid email address`
        }
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

        // used to refer the collection ID
        ref: "User_schema_validation"
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


// ======= Schema Methods ========

// ---- start of Instance methods -----
/*
userSchema.methods.displayDetails = () => {
    // access the documents data using (this keyword)
    console.log(`Your name is ${this.name} and your email is ${this.email}`)
}
*/

//userSchema.method.sayData = function () {
//    console.log(`Your name is ${this.name}`)
//}

// userSchema.methods.displayDetails = function () {
//     // access the documents data using (this keyword)
//     console.log(`Your name is ${this.name}`)
// }


// userSchema.method("sayHello", function () {
//     console.log(`Your name is ${this.name}`)
// })


// userSchema.methods.sayHi = function () {
//     console.log(`Your name is ${this.name}`)
// }


// Instance methods
userSchema.methods.sayHai = function () {
    console.log(`Your name is ${this.name}`)
}

// ---- end of Instance methods -----

// ---- start of static methods -----

// Static methods return the cursor object
userSchema.statics.findByNishaName = function (name) {
    // return this.where({ name: name })
    // return this.where({ name })
    // return this.where("name").equals(name)

    return this.find({ name: name })
}

// ---- end of static methods -----


// ---- start of query object  -----
// By using query object , we can create a custom function , and divide them for filtering purposes
userSchema.query.byName = function (name) {
    return this.where({ name: name })
}

// ---- end of query object -----


// ---- Start of Schema virtual -----

userSchema.virtual("namedEmail").get(function () {
    // `Name : ${this.name} | Email : ${this.email}` this string going to value for namedEmail
    return `Name : ${this.name} | Email : ${this.email}`
})

// ---- End  of Schema virtual -----

// ---- start  of Schema middleware -----

userSchema.pre("save", function (next) {
    this.name = `Mr. ${this.name}`
    next();
})



// ---- End  of Schema middleware -----



const userModel = mongoose.model('User_schema_validation', userSchema);

module.exports = userModel