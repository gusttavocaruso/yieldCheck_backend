const model = require('../model/signInUpModel');
const { tokenGenerate } = require('../utils/tokenService');
const validate = require('../utils/validations');

const userRegister = async (newUser) => {
  validate.userEntitiesVdt(newUser);

  const user = await model.createUser(newUser);

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
