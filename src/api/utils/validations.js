const errHandler = require('./errHandler');
const userSchema = require('./schemas/userSchema');
const supplySchema = require('./schemas/supplySchema');

const userEntitiesVdt = (newUser) => {
  const { error } = userSchema.validate(newUser);
  if (error) throw errHandler(404, error.message);
}

const userAlreadyExists = (user) => {
  if (user) throw errHandler(409, 'Email já utilizado.');
}

const userKeysVdt = (logsKeys, user) => {
  if (!user) throw errHandler(404, 'Usuário não encontrado.')
  if (logsKeys.password != user.password) throw errHandler(
    404, 'Email & password doesnt match.');
}

const tokenVdt = (token) => {
  if (typeof token === 'string') throw errHandler(404, `Acesso negado. ${token}`);
}

const firstInVdt = (hasFirstIn) => {
  if (hasFirstIn) throw errHandler(409,
    `Primeira interação já realizada para este usuário. At _id: ${hasFirstIn._id}`);
}

const supplyPayloadVdt = (supplyPayload) => {
  const { error } = supplySchema.validate(supplyPayload);
  if (error) throw errHandler(404, error.message);
}

module.exports = {
  userEntitiesVdt,
  userAlreadyExists,
  userKeysVdt,
  tokenVdt,
  firstInVdt,
  supplyPayloadVdt,
};
