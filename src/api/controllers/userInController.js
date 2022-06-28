const { firstInService, inputService, calcYield } = require('../services/userInService');

const firstIn = async (req, res, next) => {
  try {
    const supplyPayload = req.body;
    const token = req.user;
    const id = await firstInService(supplyPayload, token);

    return res.status(201).json({
      message: `Primeira interação realizada para ${token.email}`,
      interactionID: id,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const newInputs = async (req, res, next) => {
  try {
    const id = req.params;
    const supplyPayload = req.body;
    const input = await inputService(id, supplyPayload);

    return res.status(200).json({
      message: `O rendimento atual (${input.at}) é de ${input.kmPerL} KM/L`
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const currentStatus = async (req, res, next) => {
  try {
    const token = req.user;
    const currentYield = await calcYield(token);

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
