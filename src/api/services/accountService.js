const model = require('../model/accountModel');
const { tokenGenerate } = require('../utils/tokenService');
const validate = require('../utils/validations');

const userRegister = async (newUser) => {
  validate.userEntitiesVdt(newUser);
  validate.userAlreadyExists(await model.findUserByEmail(newUser));

  const user = await model.createUser(newUser);
  return { user };
};

const userLogin = async (logsKey) => {
  const user = await model.findUserByEmail(logsKey);

  validate.userKeysVdt(logsKey, user);

  const { password: _password, ...userLessPass } = user;
  const tokenId = tokenGenerate(userLessPass);

  return { token: tokenId };
};

module.exports = {
  userRegister,
  userLogin,
};
