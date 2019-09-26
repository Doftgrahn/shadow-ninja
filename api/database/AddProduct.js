const {uri} = require('../secrets/mongoDB.config.js');
const {settings, MongoClient} = require('../settings/Settings.js');

const insertMongoDB = () => {
    // start MongoClient
    // and generate product
    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

      let collection = client.db('shadowDB').collection('games');

          collection.insertMany(null, (error, response) => {
              if(error) {
                  console.log('error insertMany');
                  throw error;
              }
              console.log('succsess insertMany: ', 'response');
              client.close()
		  })
    })
}

module.exports = {insertMongoDB}
