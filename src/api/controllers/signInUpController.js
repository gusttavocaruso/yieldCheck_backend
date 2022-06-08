const service = require('../services/signInUpService');

const register = async (req, res, next) => {
  try {
    const newUser = req.body;
    const user = await service.userRegister(newUser);

    return res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const logKeys = req.body;
    const token = await service.userSearch(logKeys);

    return res.status(200).json(token);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {
  register,
  login,
};
