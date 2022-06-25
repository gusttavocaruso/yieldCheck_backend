const jwt = require('jsonwebtoken');

const API_SECRET = '91378264G@G';
const JWT_CONFIG = { expiresIn: '10d', algorithm: 'HS256' };

const tokenGenerate = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const tokenVerify = (token) => {
  try {
    const { data } = jwt.verify(token, API_SECRET);
    return data;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  tokenGenerate,
  tokenVerify,
};
