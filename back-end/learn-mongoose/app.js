require("dotenv").config()
const Express = require('express');
const db = require("./config/db")

// const User = require("./model/user.model")
const User = require("./model/user_SchemaType.model")

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

//================================================================




//================================================================




//================================================================




//================================================================



//================================================================





app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)
})
