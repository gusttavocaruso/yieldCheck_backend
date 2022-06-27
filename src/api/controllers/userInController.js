const { firstInService, inputService, calcYield } = require('../services/userInService');

const firstIn = async (req, res, next) => {
  try {
    const supplyPayload = req.body;
    const token = req.user;
    const id = await firstInService(supplyPayload, token);

    return res.status(201).json(
      { message: `Primeira interação realizada para ${token.email}`, id }
    );
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
