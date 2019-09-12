const settings = { useNewUrlParser: true,  useUnifiedTopology: true }
const {MongoClient, ObjectId} = require('mongodb');
const shadowDB = 'shadowDB';
 module.exports = { settings, MongoClient, ObjectId, shadowDB,  };
