const connect = require('./connection');

const createUser = async ({ name, email, password }) => {
  const db = await connect();
  const { insertedId } = await db
    .collection('users')
    .insertOne({
      name, email, password
    });

  return { name, email, _id: insertedId };
};

const findUserByEmail = async ({ email }) => {
  const db = await connect();
  const userMail = await db
    .collection('users')
    .findOne({ email });
  return userMail;
};

module.exports = {
  createUser,
  findUserByEmail,
};
