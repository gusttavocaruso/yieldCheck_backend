const model = require('../model/userInModel');
const validate = require('../utils/validations');

const firstInService = async (supplyPayload, token) => {
  validate.supplyPayloadVdt(supplyPayload);
  validate.firstInVdt(await model.searchByOwner(token));

  const id = await model.firstKMRegister(supplyPayload, token);
  return id;
};

const inputService = async (id, supplyPayload) => {
  const previousSupply = await model.searchById(id);
  validate.secondSupplyPayloadVdt(supplyPayload, previousSupply);

  const actualKM = supplyPayload.odometerKM;
  const previousKM = previousSupply.odometerKM;
  const previousL = previousSupply.litersProvided;

  const deltaKM = actualKM - previousKM;
  const kmPerL = Math.round(deltaKM / previousL *100)/100;

  await model.updateData(id, previousSupply, supplyPayload, kmPerL);
  return kmPerL;
};

const calcYield = async (id) => {
  const { storyKM } = await model.searchById(id);

  const average = `${
    Math.round(storyKM.reduce((acc, km) => acc + km)
    / storyKM.length *100)/100
  } KM/L`;

  return { average, storyKM };
};

module.exports = {
  firstInService,
  inputService,
  calcYield,
};
