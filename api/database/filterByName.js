const {uri} = require('../secrets/mongodbConfig.js')
const {settings, MongoClient} = require('../settings/Settings.js');


function filterByNameMongoDB(skip, product, findProduct, filterProduct) {
	MongoClient.connect(uri, settings, (error, client) => {
		let collection = client.db('shadowDB').collection('games');
		collection.find(findProduct).skip(skip).limit(10).sort(product).toArray((error, response) => {
			if(error) { throw error }

			filterProduct(response)
			client.close()
		})

	})
}


module.exports = { filterByNameMongoDB }
