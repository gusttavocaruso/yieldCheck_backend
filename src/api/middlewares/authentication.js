const { tokenVerify } = require("../utils/tokenService");


module.exports = (req, _res, next) => {
  try {
    const { authorization } = req.headers;

    const userId = tokenVerify(authorization);
    req.user = userId;

    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
