const settings = {useNewUrlParser: true, useUnifiedTopology: true};
const {MongoClient} = require("mongodb");
const shadowDB = "shadowDB";

module.exports = {settings, MongoClient, shadowDB};
