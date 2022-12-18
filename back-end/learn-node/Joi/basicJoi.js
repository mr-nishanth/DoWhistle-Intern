// https://joi.dev/api/?v=17.7.0
// npm i joi-password-complexity
// npm i joi

const Joi = require("joi")

/*
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
    min: 10,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
};

passwordComplexity(complexityOptions).validate("aPassword123!");
*/


// define the schema
const schema = Joi.object({

    // name: Joi.string(),
    // age: Joi.number()

    // name: Joi.string().required(),
    // age: Joi.number().required()

    // name: Joi.string().required(),
    // age: Joi.number().integer().required()

    // name: Joi.string().required(),
    // age: Joi.number().integer().min(1).max(80).required(),

    // name: Joi.string().required(),
    // age: Joi.number().integer().min(1).max(80).required(),
    // amount: Joi.number()

    // name: Joi.string().min(6).max(30).required(),
    // age: Joi.number().integer().min(1).max(80).required(),
    // amount: Joi.number()

    // name: Joi.string().min(6).max(30).required(),
    // username: Joi.string().alphanum().min(6).max(15).required(),
    // age: Joi.number().integer().min(1).max(80).required(),
    // amount: Joi.number()

    name: Joi.string().min(6).max(30).required(),
    username: Joi.string().alphanum().min(6).max(15).required(),
    age: Joi.number().integer().min(1).max(80).required(),
    password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
    confirm_pass: Joi.ref('password'),
    amount: Joi.number(),
    token: Joi.any(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', "in"] } })
})

const payload = {

    // name: "Nishanth",
    // age: 22


    // name: "Nishanth",
    // age: "22" // NOTE: here "22" (string) parse to 22(number)

    // name: 24, // "name" must be a string
    // age: "22"

    // ERROR: "name" is required
    // age: 22

    // name: "Nishanth",
    //age: 22.5 //  must be an integer

    //name: "Nishanth",
    //age: 85 //  "age" must be less than or equal to 80
    //age: 0 //  "age" must be greater than or equal to 1

    //name: "Nishanth",
    //age: 22,
    //amount: 2500 // "amount" is not allowed

    // name: "Nishanth",
    // age: 22,
    // amount: 2500 

    //name: "Nisha", // "name" length must be at least 6 characters long
    //age: 22,
    //amount: 2500

    // name: "Nishanth",
    //username: "nishanth_007",//"username" must only contain alpha-numeric characters
    // username: "nishanth007",// accepts
    // age: 22,
    // amount: 2500

    //name: "Nishanth",
    //username: "nishanth007",
    //password: "Nish007",// "password" with value "Nish007" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/
    //age: 22,
    //amount: 2500

    //    name: "Nishanth",
    //    username: "nishanth007",
    //    password: "Nisha007",
    //    age: 22,
    //    amount: 2500,
    //    token: "nishanth007_helloWorld",
    //email: "Nisha007@gmail.joi"// "email" must be a valid email
    //    email: "nishanth007@gmail.com"

    //name: "Nishanth",
    //username: "nishanth007",
    //password: "Nisha007",
    //confirm_pass: "Nisha 007", // "confirm_pass" must be [ref:password]
    //age: 22,
    //amount: 2500,
    //token: "nishanth007_helloWorld",
    //email: "nishanth007@gmail.com"



}

const { error, value } = schema.validate(payload)
if (value) console.log(value)
console.log(error?.message)