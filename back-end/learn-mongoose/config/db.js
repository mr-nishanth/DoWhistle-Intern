const mongoose = require('mongoose');

exports.DBConn = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/learn-mongoose");
        console.log("Database connection established")
    } catch (error) {
        console.log(error.message)
    }
}
