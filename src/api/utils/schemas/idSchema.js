const joi = require('@hapi/joi');

module.exports = joi.string().length(24).required();
