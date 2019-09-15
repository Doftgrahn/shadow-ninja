const {uri} = require('../../secrets/mongoDB.config')
const {settings, MongoClient, ObjectId} = require('../../settings/Settings.js');

//edit currency to fixed amount, fix to be based on different values later.

  function editUserCurrencyMongoDB (userId, singleUser) {

    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

	  let collection = client.db('shadowDB').collection('users');

    collection.updateOne({_id: ObjectId(`${userId}`)}, {$set:{currency: 20000}}, function(err, response) {
    if (err) {
      throw error
    } else {
      singleUser(response)
    }
    });
    client.close()


    })
}


module.exports = { editUserCurrencyMongoDB }
