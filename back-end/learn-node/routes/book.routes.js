const route = require('express').Router();
const dbConnection = require('../model/db')

route.route("/")
    .post(async (req, res) => {
        const db = await dbConnection();
        const insertResult = await db.collection("books").insertMany([{ name: "Vijay" }, { name: "Surya" }, { name: "Kumar" }]);
        console.log('Inserted documents =>', insertResult);
        res.json(insertResult)
    })
    .get((req, res) => {
        res.send("From Post Book!");
    })



route.route("/:id")
    .get((req, res) => {

        res.send(`Book ${req.params.id}`);
    })
    .patch((req, res) => {

    })
    .delete((req, res) => {

    })

module.exports = route


