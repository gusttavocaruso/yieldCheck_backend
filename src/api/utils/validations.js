const errHandler = require('./errHandler');
const userSchema = require('./schemas/userSchema');

const userEntitiesVdt = (newUser) => {
  const { error } = userSchema.validate(newUser);
  if (error) throw errHandler(404, error.message);
}

const userAlreadyExists = (user) => {
  if (user) throw errHandler(409, 'Email já utilizado.');
}

const userKeysVdt = (logsKeys, user) => {
  if (!user) throw errHandler(404, 'Usuário não encontrado.')
  if (logsKeys.password != user.password) throw errHandler(404, 'Email & password doesnt match.');
}

const tokenVdt = (token) => {
  if (typeof token === 'string') throw errHandler(404, `Acesso negado. ${token}`);
}

const firstInVdt = (hasFirstIn) => {
  console.log(hasFirstIn);
}

module.exports = {
  userEntitiesVdt,
  userAlreadyExists,
  userKeysVdt,
  tokenVdt,
  firstInVdt,
};
