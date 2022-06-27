const joi = require('@hapi/joi');

module.exports = joi.object({
  odometerKM: joi.number().min(0).required(),
  litersProvided: joi.number().min(0).required(),
});
