const joi = require('@hapi/joi');
const errHandler = require('./errHandler');

const userEntitiesVdt = (newUser) => {

  const userSchema = joi.object({
    name: joi.string().min(4).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).alphanum().required(),
  });

  const { error } = userSchema.validate(newUser);
  if (error) throw errHandler(404, error.message);
}

module.exports = {
  userEntitiesVdt,
};
