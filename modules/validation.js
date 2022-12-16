const Joi = require("joi")

class Validation {
    static async(data) {
        return Joi.object({
            fullname: Joi.string().required(),
            username: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        }).validateAsync(data)
    }
}

module.exports = Validation