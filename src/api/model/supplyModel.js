const { ObjectId } = require('mongodb');
const connect = require('./connection');

const firstKMRegister = async (bodyPayload, token) => {
  const db = await connect();
  const { insertedId } = await db
    .collection('users-yield')
    .insertOne({
      owner: token,
      ...bodyPayload,
      previousKM: 0,
      previousL: 0,
      kmPerLStory: []
    });

  return insertedId;
};

const searchById = async (id) => {
  const db = await connect();
  const account = await db
    .collection('users-yield')
    .findOne({ _id: ObjectId(id) });
  return account;
};

const searchByOwner = async ({ email }) => {
  const db = await connect();
  const owner = await db
    .collection('users-yield')
    .findOne({ 'owner.email': email })
  return owner;
}

const updateData = async (id, previousSupply, newSupply, kmPerL, at) => {
  const db = await connect();
  await db.collection('users-yield')
    .updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          odometerKM: newSupply.odometerKM,
          litersProvided: newSupply.litersProvided,
          previousKM: previousSupply.odometerKM,
          previousL: previousSupply.litersProvided,
        },
        $push: { kmPerLStory: { kmPerL, at } },
      }
    );
};

module.exports = {
  firstKMRegister,
  searchById,
  updateData,
  searchByOwner,
};
