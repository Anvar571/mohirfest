const Joi = require("joi")

class Validation {
    static async emailValidation(data) {
        return Joi.object({
            email: Joi.string().required().email()
        }).validateAsync(data)
    }
}

module.exports = Validation