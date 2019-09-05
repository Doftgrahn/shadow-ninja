const {uri, settings} = require('../secrets/mongoDB.config')
const MongoClient = require('mongodb').MongoClient;
const shadowDB = 'shadowDB';

const insertMongoDB = () => {
    // start MongoClient
    // and generate product
    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

      let collection = client.db('shadowDB').collection('games');

      function generateProduct() {
          const name = ['TMNT', 'Mulle Meck bygger bilar', 'My little ponny', 'Red alert']
      	  const price = [56, 156, 256, 356]
      	  const category = ['Action', 'PG13', 'Kids', 'Reality']

    			let productDocs = [];

          for(let i=0; i<10; i++) {
              let randomName = Math.floor(Math.random() * name.length);
              let randomPrice = Math.floor(Math.random() * price.length);
              let randomCategory = Math.floor(Math.random() * category.length);

              productDocs.push({name: name[Math.floor(randomName)], price: price[Math.floor(randomPrice)], category: category[Math.floor(randomCategory)]})
          }

          collection.insertMany(productDocs, (error, response) => {
              if(error) {
                  throw error;
                  console.log('error insertMany');
              }
              console.log('succsess insertMany: ', response);
              client.close()
            })
      }

    generateProduct()

})
}

module.exports = {insertMongoDB};
