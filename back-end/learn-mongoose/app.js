require("dotenv").config()
const Express = require('express');
const db = require("./config/db")
const User = require("./model/user.model")
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




//================================================================




//================================================================




//================================================================




//================================================================



//================================================================





app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)
})
