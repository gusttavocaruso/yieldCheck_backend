const model = require('../model/userInModel');
const validate = require('../utils/validations');

const firstInService = async (bodyPayload, token) => {
  console.log('>>', token)
  validate.firstInVdt(await model.searchByOwner(token));

  const id = await model.firstKMRegister(bodyPayload, token);

  return { id };
};

const inputService = async (id, bodyPayload) => {
  const previousData = await model.searchById(id);

  const actualKM = bodyPayload.odometerKM;
  const previousKM = previousData.odometerKM;
  const previousL = previousData.litersProvided;

  const deltaKM = actualKM - previousKM;
  const kmPerL = Math.round(deltaKM / previousL *100)/100;

  await model.updateData(id, previousData, bodyPayload, kmPerL);
  return kmPerL;
};

const calcYield = async (id) => {
  const { storyKM } = await searchById(id);

  const average = Math.round(storyKM
    .reduce((acc, km) => acc + km) / storyKM.length *100)/100;

  return { storyKM, average };
};

module.exports = {
  firstInService,
  inputService,
  calcYield,
};
