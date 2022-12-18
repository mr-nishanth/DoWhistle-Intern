// const EventEmitter = require('events');
// const myEvent = new EventEmitter();

require("dotenv").config()
const Express = require('express');
const bookRoute = require("./routes/index.routes")
const app = Express();

const PORT = process.env.PORT || 3500

app.set('view engine', 'pug')

app.use("/", bookRoute)


app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)

})
