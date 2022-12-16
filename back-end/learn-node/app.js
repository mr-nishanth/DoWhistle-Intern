require("dotenv").config()
const Express = require('express');

const app = Express();

const PORT = process.env.PORT || 3500

app.get("/", (req, res) => {
    console.log(__dirname)
    // C:\Intership\back-end\learn-node\page
    // res.sendFile(__dirname + "/page/home.html")
    // res.sendFile("C:\\Intership\\back-end\\learn-node\\page\\home.html")
})

app.get("/about", (req, res) => {
    res.send("<h1>This is About page</h1>")

})

app.all("*", (req, res) => {
    console.log(req.url)
    res.send("<h1>Page Not Found</h1>")
})

app.listen(PORT, () => {

    console.log(`App listening on ${PORT}`)
    // console.log('App listening on ', PORT)
})

// app.listen(PORT, function () {
//     console.log(`App listening on ${PORT}`)
// })
