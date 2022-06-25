const joi = require('@hapi/joi');

module.exports = joi.object({
  name: joi.string().min(4).required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).alphanum().required(),
});
