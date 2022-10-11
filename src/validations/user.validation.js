const Joi = require("joi");
const { objectId,password } = require("./custom.validation");

//  Implement request validation for "/v1/users/:userId" endpoint
/**
 * Example url: `/v1/users/:userId`
 * Validate the "userId" url *params* field. "userId" value should be a
 * - string
 * - valid Mongo id -> Use the helper function in src/validations/custom.validation.js
 */
const getUser = {
  params: Joi.object().keys({
    userId : Joi.string().custom(objectId)
  }),
};

const createUser = {
  body: Joi.object().keys({
    name : Joi.string().required(),
    email : Joi.string().required(),
    password : Joi.string().required().custom(password),
    walletMoney : Joi.number().required(),
    address : Joi.string()
  }),
};

const setAddress = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    address: Joi.string().required().min(20),
  }),
};

module.exports = {
  getUser,
  createUser,
  setAddress
};
