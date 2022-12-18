require("dotenv").config()
const Express = require('express');
const db = require("./config/db")
const app = Express();

const PORT = process.env.PORT || 3500

db.DBConn()


app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)
})
