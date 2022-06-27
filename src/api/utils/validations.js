const errHandler = require('./errHandler');
const userSchema = require('./schemas/userSchema');
const supplySchema = require('./schemas/supplySchema');
const idSchema = require('./schemas/idSchema');

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

const secondSupplyPayloadVdt = (supply, previous) => {
  supplyPayloadVdt(supply);

  if (!previous) throw errHandler(404, 'errow');

  if (previous.odometerKM >= supply.odometerKM) throw errHandler(
    404, `Insira uma quilometragem maior que a ultima inserida. (${previous.odometerKM}km)`
  );
}

const idValidation = (id) => {
  const { error } = idSchema.validate(id);
  if (!id || error) throw errHandler(404, 'Insira um id válido');
}

module.exports = {
  userEntitiesVdt,
  userAlreadyExists,
  userKeysVdt,
  tokenVdt,
  firstInVdt,
  supplyPayloadVdt,
  secondSupplyPayloadVdt,
  idValidation,
};
