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
      storyKM: []
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

const searchByOwner = async ({ _id }) => {
  const db = await connect();
  const owner = await db
    .collection('users-yield')
    .findOne({ owner: { _id: _id } })
  return owner;
}

const updateData = async (id, previousData, newData, kmPerL) => {
  const db = await connect();
  await db.collection('users-yield')
    .updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          odometerKM: newData.odometerKM,
          litersProvided: newData.litersProvided,
          previousKM: previousData.odometerKM,
          previousL: previousData.litersProvided,
        },
        $push: { storyKM: kmPerL },
      }
    );
};

module.exports = {
  firstKMRegister,
  searchById,
  updateData,
  searchByOwner,
};
