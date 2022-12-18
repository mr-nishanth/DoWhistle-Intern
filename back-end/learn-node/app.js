const express = require('express');

const app = express();
const JOIvalidation = require("./validation")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/", JOIvalidation.register, (req, res) => {


    // const result = schema.validate(data)
    // res.send(result)

    // console.log(req.body)
    // res.json({
    //     result: req.body
    // })


    // ====== Database Insert operation ======
    return res.status(200).send({ message: "Successfully registered" })

})

app.post("/data", JOIvalidation.insertData, (req, res) => {
    res.send({ message: "Data inserted" })
})

app.listen(3000, () => {
    console.log(`Application running at PORT : 3000`)
})