const Joi = require("joi");
const { password,email } = require("./custom.validation");

// Define request validation schema for user registration
/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 * - "name": string
 */
const register = {
  body: Joi.object().keys({
    email : Joi.string().required().email(),
    name : Joi.string().required(),
    password : Joi.string().required().custom(password)
  }),
};

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 */
const login = {
  body: Joi.object().keys({
    email : Joi.string().required().email(),
    password : Joi.string().required().custom(password)
  }),
};

module.exports = {
  register,
  login,
};
