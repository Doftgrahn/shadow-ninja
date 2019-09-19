const {uri} = require('../../secrets/mongoDB.config.js')
const {settings, MongoClient, ObjectId} = require('../../settings/Settings.js');

//edit currency to fixed amount, fix to be based on different values later.

  function editUserCurrencyMongoDB (userId, user, singleUser) {
    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

	  let collection = client.db('shadowDB').collection('users');
    let userToEdit = JSON.parse(user)
    collection.updateOne({_id: ObjectId(`${userId}`)}, {$set:{currency: `${userToEdit.currency}`}}, function(err, response) {
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
