require("dotenv").config()
const Express = require('express');
const db = require("./config/db")

// const User = require("./model/user.model")
// const User = require("./model/user_SchemaType.model")
// const User = require("./model/user_schemaValidation.model")
const User = require("./model/user_schemaMethods.model")

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



// const schemaValidation = async () => {
//     try {
//         const user = await User.create({
//             name: "Vasu",
//             age: 16,
//             email: "vasu@gmail.com",
//         })
//         console.log(user)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// schemaValidation()




//================================================================
// Query methods

// https://mongoosejs.com/docs/queries.html
// https://mongoosejs.com/docs/tutorials/lean.html

// const queryMethods = async () => {
// try {
// const user = await User.findById("639e8c08d9cc8419d2863a20")
// const user = await User.findOne() // return first document in array []

// const user = await User.find({ name: "Sandhya" })



// const user = await User.find({ name: "Sandhya" }).lean()


// const user = await User.find({ name: "Sandhya" }).lean().select("-email")

// const user = await User.find({ name: "Sandhya" }).lean().select("email")

// exists , if specified value is present return the ID ,else null
// const user = await User.exists({ name: "Yalini" }) // null 
// const user = await User.exists({ name: "yalini" }) // 639e8c08d9cc8419d2863a20


// Where and equals function 
// const user = await User.where("name").equals("yalini")
// const user = await User.where({ name: "Hari" })

// const user = await User.where("age").gt("10").lt("20")
// const user = await User.where("age").gt(10).lt(20)
// const user = await User.where("age").gt(10).lt(20).limit(1)

// populate , get the related document from specified document
// const user = await User.where("id").equals("639e8c08d9cc8419d2863a20").populate("bestFriends").limit(3)

// console.log(user)
// } catch (error) {
// console.log(error.message)
// }
// }

// queryMethods()



//================================================================
// Schema Methods
// Go to model folder => user_schemaMethods.model.js

// NOTE: In case we using schema methods(instance methods), findOne is must..
//  By mistake, we find at the time its through a error [  <schema methods> is not a function ]

const userSchemaInstanceMethods = async () => {
    try {
        const user = await User.findOne({ name: "yalini" })
        console.log(user)
        // user.sayHi()
        // (sayHai() is [user] instance methods)
        user.sayHai()




    } catch (err) {
        console.log(err.message)
    }
}

// userSchemaInstanceMethods()

const userSchemaStaticMethods = async () => {
    try {
        // const user = await User.findByNishaName("Nisha")
        // const user = await User.findByNishaName("Hari")
        const user = await User.findByNishaName("yalini")

        // user.sayHai() // user.sayHai is not a function => because static methods return cursor ,the data are in array format ,so we can't access them

        console.log(user)
    } catch (err) {
        console.log(err.message)
    }
}

// userSchemaStaticMethods()

const userSchemaQueryObject = async () => {
    try {

        // here find return the query object , we chaining by our custom query object method (byName)
        // NOTE: without calling find method , the query object wouldn't work [ eg: byName its not function]
        // because we know that it's query chaining function
        // query object get from find and where methods
        //          eg: User.find or User.where
        const user = await User.find().byName("Sandhya")

        console.log(user)
    } catch (err) {
        console.log(err.message)
    }
}

// userSchemaQueryObject()


//================================================================
// Schema Virtual
const schemaVirtual = async () => {
    try {
        const user = await User.findById("639e8cf4e3608f23192fb45c")
        console.log(user)

        console.log(user.namedEmail)

    } catch (error) {
        console.log(error.message)
    }
}

schemaVirtual()

//================================================================





app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)
})
