const Joi = require('joi');


const resgisterSchema = Joi.object({
    Fname : Joi.string().required(),
    Lname : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(6).max(12).required()
})

module.exports = {
    resgisterSchema
};