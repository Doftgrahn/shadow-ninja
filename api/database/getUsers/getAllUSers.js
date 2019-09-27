const {uri} = require("../../secrets/mongodbConfig");
const {settings, MongoClient} = require("../../settings/Settings.js");

const getAllUsers = callback => {
  MongoClient.connect(uri, settings, (err, client) => {
    let collection = client.db("shadowDB").collection("users");

    collection.find({}).toArray((error, response) => {
      if (error) {
        console.error("Could not get USERS");
        throw error;
      }
      callback(response);
      console.log(response);
      client.close();
    });
  });
};

module.exports = {getAllUsers};
