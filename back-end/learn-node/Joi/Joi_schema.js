const Joi = require("joi")
exports.schema = Joi.object({
    name: Joi.string().min(6).max(12).required(),
    age: Joi.number().integer().min(18).max(25).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', "in"] } })
})
exports.dataSchema = Joi.object({
    mobile: Joi.number().min(10).required(),
    address: Joi.string().required()
})