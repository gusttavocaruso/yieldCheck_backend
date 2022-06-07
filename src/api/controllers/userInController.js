const { firstInService, inputService, calcYield } = require('../services/userInService');

const firstIn = async (req, res, next) => {
  try {
    const bodyPayload = req.body;
    const ok = await firstInService(bodyPayload);

    return res.status(201).json(ok);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const newInputs = async (req, res, next) => {
  try {
    const id = req.params;
    const bodyPayload = req.body;
    const kmPerL = await inputService(id, bodyPayload);

    return res.status(200).json({ lastSupply: `${kmPerL} KM/L` });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const currentStatus = async (req, res, next) => {
  try {
    const id = req.params;
    const currentYield = await calcYield(id);

    return res.status(200).json(currentYield);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  firstIn,
  newInputs,
  currentStatus,
};
