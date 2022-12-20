const Joi = require("joi")

class Validation {
    static async emailValidation(data) {
        return Joi.object({
            email: Joi.string().required().email()
        }).validateAsync(data)
    }

    static async taskValidation (data) {
        return Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
            ball: Joi.string().required(),
            category: Joi.string().required(),
            images: Joi.array(),
            ball: Joi.number(),
        }).validateAsync(data)
    }
}

module.exports = Validation