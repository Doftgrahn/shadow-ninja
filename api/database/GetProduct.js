const {uri} = require('../secrets/mongoDB.config')
const {settings, MongoClient, shadowDB} = require('../settings/Settings.config')


const getProductMongoDB = (getProduct) => {
  MongoClient.connect(uri, settings, (error, client) => {
    if(error) { throw error }

    let collection = client.db('shadowDB').collection('games');
    collection.find({}).toArray((error, response) => {
      if(error) { throw error }

      // getProduct(response)
      console.log('response from get product: ', 'response');
      client.close()
    })

  })
}

module.exports = { getProductMongoDB }
