const { tokenVerify } = require("../utils/tokenService");
const validate = require('../utils/validations');

module.exports = (req, _res, next) => {
  try {
    const { authorization } = req.headers;

    const data = tokenVerify(authorization);
    validate.tokenVdt(data);

    req.user = data;
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
