const errHandler = require('./errHandler');
const userSchema = require('./schemas/userSchema');

const userEntitiesVdt = (newUser) => {
  const { error } = userSchema.validate(newUser);
  if (error) throw errHandler(404, error.message);
}

const userAlreadyExists = (user) => {
  if (user) throw errHandler(409, 'Email já utilizado em outro usuário');
}

module.exports = {
  userEntitiesVdt,
  userAlreadyExists,
};
