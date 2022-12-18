require("dotenv").config()
const Express = require('express');
const db = require("./config/db")

// const User = require("./model/user.model")
// const User = require("./model/user_SchemaType.model")
const User = require("./model/user_schemaValidation.model")

const app = Express();

const PORT = process.env.PORT || 3500

db.DBConn()


// Different way to create or insert the documents

//================================================================
// const user = new User({
//     name: "Naveen",
//     age: 22
// })

//================================================================
// user.save().then(() => {
//     console.log("USer inserted")
// }).catch(err => console.log(err))


//================================================================
// const saveUser = async () => {
//     const result = await user.save()
//     console.log(result)
// }
// saveUser()

//================================================================
// const insertUserAndSave = async () => {
//     const user = await User.create({
//         name: "Vijay Kumar",
//         age: 21
//     })
//     console.log(user)
// }
// insertUserAndSave()


//================================================================
// const insertUserAndChangeTheName = async () => {
//     const user = await User.create({
//         name: "Vijay Kumar",
//         age: 21
//     })
//     user.name = "Raja"

//     await user.save() // save method is import

//     console.log(user)
// }
// insertUserAndChangeTheName()

//================================================================
// Schema Types
/*
const insertUser = async () => {
    try {
        const user = await User.create({
            name: "Bond",
            age: 40,
            // age:"" // its store as null value 
            // age: "welcome", // through a error 

            email: "bond@gmail.com",
            hobbies: ["Hollywood", "Volleyball"],
            address: {
                street: "4th gold flood street",
                pin: 416321
            }
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
        // console.log(error.errors)
    }

}
insertUser()
*/

//================================================================
// Schema validation

/*
const schemaValidation = async () => {
    try {
        const user = await User.create({
            name: "Muthu",
            age: 35
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}

schemaValidation() // User_schema_validation validation failed: email: Path `email` is required.

*/

/*
const schemaValidation = async () => {
    try {
        const user = await User.create({
            name: "Muthu",
            age: 35,
            email: "muthu@gmail.com"
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}
schemaValidation()
*/
// E11000 duplicate key error collection:
// learn-mongoose.user_schema_validations index: email_1 dup key:
// { email: "muthu@gmail.com" }
// Here, I tried to enter the same email twice, but it didn't work , because in scheme validation I provide unique email (unique true)



// const schemaValidation = async (time) => {
//     try {
//         const user = await User.create({
//             name: "Vasu",
//             age: 16,
//             email: "vasu@gmail.com",
//             createdAt: new Date(time).toDateString()
//         })
//         console.log(user)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// schemaValidation("2022-12-18")



const schemaValidation = async () => {
    try {
        const user = await User.create({
            name: "Vasu",
            age: 16,
            email: "vasu@gmail.com",
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}
schemaValidation()



//================================================================




//================================================================




//================================================================



//================================================================





app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)
})
