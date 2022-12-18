const { string } = require('Joi');
const Joi = require('Joi');

// Create a own schema 
const name = Joi.string().min(6);
const age = Joi.number().integer().min(1).max(50)
const registerSchema = Joi.object({
    name: Joi.string().min(6),
    age: Joi.number().integer().min(1).max(50)
})

const contactSchema = Joi.object({
    // Instead of using Joi.string().min(6) use name(own schema)
    name: name,
    contact: Joi.number().integer().min(10)
})

const rPayload = {
    name: "Nishanth",
    age: 24
}

// const { error, value } = registerSchema.validate(rPayload)
// if (error) console.log(error.message)
//else console.log(value)

// Lets create college form [teacher,student]
/*
const schoolSchema = Joi.object({

    fullname: name,
    firstName: Joi.string(),
    lastName: Joi.string(),
    type: Joi.string().valid("Student", "Teacher"),

    // Age for students max 30 and teacher max 60

    age: Joi.when("type", {
        is: "Student",
        then: Joi.number().integer().min(18).max(25),
        otherwise: Joi.number().integer().min(25).max(60)
    })

})

*/
// ----------- Either fullname or firstname and lastname using xor
const schoolSchema = Joi.object({

    fullName: name,
    firstName: Joi.string(),
    lastName: Joi.string(),
    type: Joi.string().valid("Student", "Teacher"),
    card: Joi.string().creditCard(),
    indian: Joi.boolean(),

    // backlog: Joi.array(),
    backlog: Joi.array().items(Joi.object({
        sub: Joi.string().required(),
        mark: Joi.number().max(100).required()
    })),

    joined: Joi.date().greater("12-12-2022"),

    age: Joi.when("type", {
        is: "Student",
        then: Joi.number().integer().min(18).max(25),
        otherwise: Joi.number().integer().min(25).max(60)
    }),

    salary: Joi.number().precision(2),

    username: Joi.string().custom((value, helper) => {
        if (value.length < 10) return helper.message("Length should be greater than 10")
        return true
    })



}).xor("fullName", "firstName").and("firstName", "lastName")

const schoolPayload = {

    //fullName: "Nishanth",
    //firstName: "Mr",
    //lastName: "Nishanth",
    // NOTE: It caseSensitive
    //type: "Student",
    // type: "Player", // "type" must be one of [Student, Teacher]
    //age: 24

    /*

    fullName: "Nishanth",
    firstName: "Mr",
    lastName: "Nishanth",
    type: "Student",
    age: 27// "age" must be less than or equal to 25

    */

    /*
    // ERROR: "value" contains a conflict between exclusive peers [fullName, firstName]
    // because ,we sent fullName as well as firstName
    fullName: "Nishanth",
    firstName: "Mr",
    lastName: "Nishanth",
    type: "Student",
    age: 23
    */

    firstName: "Mr",
    lastName: "Nishanth",
    type: "Student",
    //card: "2222 3333 4444", // "card" must be a credit card
    // card: "2222 3333 4444 5555",
    card: "4242424242424242", // valid card number
    age: 23,
    // indian: true,
    indian: "true",
    // backlog: ["hell", "clock"],
    backlog: [{ sub: "Chemistry", mark: 99 }, { sub: "Physics", mark: 90 }],



    //joined: "12-11-2022" // "joined" must be greater than "2022-12-11T18:30:00.000Z"

    // month-day-year
    joined: "12-13-2022",

    // precision convert into 2 decimal places 
    salary: 2500.355,

    // username custom
    username: "Nishanth" // Length should be greater than 10

}

const { error, value } = schoolSchema.validate(schoolPayload)
if (error) console.log(error.message)
else console.log(value)
