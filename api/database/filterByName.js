const {uri} = require('../secrets/mongoDB.config')
const {settings, MongoClient, shadowDB} = require('../settings/Settings.js');


    function filterByNameMongoDB(product, filterProduct) {

    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

      let collection = client.db('shadowDB').collection('games');
      collection.find().sort(product).toArray((error, response) => {
        if(error) { throw error }

        filterProduct(response)
        client.close()
      })

    })
}


module.exports = { filterByNameMongoDB }
