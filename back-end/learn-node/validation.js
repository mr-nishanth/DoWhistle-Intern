const Joi = require("joi")
const joiSchema = require("./Joi_schema")

/*
module.exports = (req, res, next) => {
    const data = req.body
    const { error, value } = schema.validate(data)
    if (error) {
        // return res.status(400).send(error.message)
        return res.status(400).send({ error: error.details[0].message })
    }
    next()
}
*/
exports.register = (req, res, next) => {
    const data = req.body
    const { error, value } = joiSchema.schema.validate(data)
    if (error) {
        // return res.status(400).send(error.message)
        return res.status(400).send({ error: error.details[0].message })
    }
    next()
}


exports.insertData = (req, res, next) => {
    const data = req.body
    const { error, value } = joiSchema.dataSchema.validate(data)
    if (error) {
        // return res.status(400).send(error.message)
        return res.status(400).send({ error: error.details[0].message })
    }
    next()
}
