const model = require('../model/signInUpModel');
const { tokenGenerate } = require('../utils/tokenService');

const userRegister = async ({ name, email, password }) => {
  const user = await model.createUser(name, email, password);

  return { user };
};

const userSearch = async ({ email }) => {
  const user = await model.findUserByEmail(email);
  const { password: _password, ...userLessPass } = user;

  const tokenId = tokenGenerate(userLessPass);
  return { token: tokenId };
};

module.exports = {
  userRegister,
  userSearch,
};
