const {uri} = require("../secrets/mongoDB.config.js");
const {settings, MongoClient} = require("../settings/Settings.js");

const insertChatHistory = message => {
  MongoClient.connect(uri, settings, (error, client) => {
    let collection = client.db("shadowDB").collection("chat");

    collection.insertMany([message], (err, result) => {
      if (err) {
        console.error("Could not Insert Chat History");
        throw err;
      }
      console.log("Successefully inserted history");
      client.close();
    });
  });
};

const getAllHistory = (currentRoom, callback) => {
  MongoClient.connect(uri, settings, (error, client) => {
    let collection = client.db("shadowDB").collection("chat");

    const query = { room: currentRoom };

    collection
      .find(query)
      .limit(5)
      .toArray((err, result) => {
        if (err) {
          console.error("Could not get messages");
          throw err;
        }
        callback(result);
        client.close();
      });
  });
};

module.exports = {insertChatHistory, getAllHistory};
