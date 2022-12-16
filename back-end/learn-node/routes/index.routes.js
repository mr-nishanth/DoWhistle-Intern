const path = require('path')
const route = require('express').Router();

const bookRoutes = require('./book.routes')


route.get('/', (req, res) => {
    // res.send("<h1>Welcome Page</h1>");
    // const homePath = path.join(__dirname, "..", "page", "home.html")
    // const homePath = path.join(__dirname, "..", "views", "home.pug")
    // res.sendFile(homePath)

    res.render("index", { name: "" })
})

route.use("/book", bookRoutes)

route.all('/*', (req, res) => {
    res.send("<h1>Page Not Found</h1>");
})


module.exports = route


