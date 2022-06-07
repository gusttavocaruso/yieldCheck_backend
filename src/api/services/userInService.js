const { firstKMRegister, searchById, updateData } = require('../model/userInModel');

const firstInService = async (bodyPayload) => {
  const id = await firstKMRegister(bodyPayload);

  return { id };
};

const inputService = async (id, bodyPayload) => {
  const previousData = await searchById(id);

  const actualKM = bodyPayload.odometerKM;
  const previousKM = previousData.odometerKM;
  const previousL = previousData.litersProvided;

  const deltaKM = actualKM - previousKM;
  const kmPerL = Math.round(deltaKM / previousL *100)/100;

  await updateData(id, previousData, bodyPayload, kmPerL);
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
