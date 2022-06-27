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
    const supplyPayload = req.body;
    const kmPerL = await inputService(id, supplyPayload);

    return res.status(200).json({ message: `O rendimento atual é de ${kmPerL} KM/L` });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const currentStatus = async (req, res, next) => {
  try {
    const id = req.params;
    const token = req.user;
    const currentYield = await calcYield(id);

    return res.status(200).json({ Usuário: token.email, currentYield });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  firstIn,
  newInputs,
  currentStatus,
};
