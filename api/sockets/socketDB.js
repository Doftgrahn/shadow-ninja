const {uri} = require("../secrets/mongodbConfig.js");
const {settings, MongoClient} = require("../settings/Settings.js");

const {db, dbcol} = require("./mongoConfig");

const insertChatHistory = message => {
  MongoClient.connect(uri, settings, (error, client) => {
    let collection = client.db(db).collection(dbcol);

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
    let collection = client.db(db).collection(dbcol);

    const query = {room: currentRoom};
    const sortByTime = {time: 1};
    collection
      .find(query)
      .limit(5)
      .sort(sortByTime)
      .toArray((err, result) => {
        if (err) {
          console.error("Could not get messages");
          throw err;
        }
        console.log("Fetched all chat history");
        callback(result);
        client.close();
      });
  });
};

module.exports = {insertChatHistory, getAllHistory};
