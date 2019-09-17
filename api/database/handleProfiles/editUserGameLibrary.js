const {uri} = require('../../secrets/mongoDB.config')
const {settings, MongoClient, ObjectId} = require('../../settings/Settings.js');

//edit currency to fixed amount, fix to be based on different values later.

  function editUserLibraryMongoDB (userId, gamesToAdd, singleUser) {
    console.log('this is the value i want to send to mongoDB', gamesToAdd)
    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

	  let collection = client.db('shadowDB').collection('users');
    let test = JSON.parse(gamesToAdd)

    test.map(game => {
      console.log('this is game inside of map',game)
      // console.log(typeof(game))
      collection.updateOne({_id: ObjectId(`${userId}`)}, {$push: {gameLibrary: game } }, function(err, response) {
        if (err) {
          throw error
        }
      });
    })
    client.close()
    })
}


module.exports = { editUserLibraryMongoDB }
