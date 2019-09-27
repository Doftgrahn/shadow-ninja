const {uri} = require("../secrets/mongodbConfig.js");
const {settings, MongoClient, ObjectId} = require("../settings/Settings.js");

const {db} = require("./mongoConfig");

const addUserOnline = user => {
  MongoClient.connect(uri, settings, (error, client) => {
    if (error) {
      throw error;
    }
    let collection = client.db(db).collection("online_chat");

    collection.insertMany([user], (err, result) => {
      if (err) {
        throw err;
      }
      client.close();
    });
  });
};

const getUsersOnline = callback => {
  MongoClient.connect(uri, settings, (error, client) => {
    let collection = client.db(db).collection("online_chat");

    collection.find({}).toArray((err, result) => {
      if (err) {
        console.error("Could not get messages");
        throw err;
      }
      callback(result);
      client.close();
    });
  });
};

const deleteUserWhenLoggingOut = id => {
  MongoClient.connect(uri, settings, (error, client) => {
    let collection = client.db(db).collection("online_chat");

//const myId = JSON.parse(myId);
    const query =  {id:id};
    collection.deleteMany(query, (err, result) => {
      if (err) {
        console.error("could not Delete");
        throw err;
      }
      console.log('result', result);
      console.log("1 Document Deleted.");
      client.close();
    });
  });
};

module.exports = {addUserOnline, getUsersOnline, deleteUserWhenLoggingOut};
