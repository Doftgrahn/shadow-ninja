const express = require('express');
const server = express();
/*DATABASE*/
const {insertMongoDB} = require('./database/AddProduct');
const {getProductMongoDB} = require('./database/GetProduct');
const db = require("./secrets/keys").mongoURI;
/*DATABASE*/
/* AUTH / LOGIN */
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
/* AUTH / LOGIN */

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*")
	next();
});

server.use(express.json())


// // function call for AddProduct
// insertMongoDB()



server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



server.get('/', (request, response) => {
	console.log('Received GET request to /test');
	response.send('"Testing!"');
})

// function call for GetProduct from database
server.get('/api/games', (request, response) => {
   getProductMongoDB(data => {
     response.send(JSON.stringify(data))
   })
})

// Passport middleware
server.use(passport.initialize());
// Passport config
require("./secrets/passport")(passport);
// Routes
server.use("/api/users", users);

server.get('/games', (request, response) => {
	console.log('Received GET request to /test');
	response.send(fakeProducts);
})


// server.get('/word/', (req, res) => {
// 	let searchWordMatched = [];
//   if (req.query.sw) {
// 		wordsData.filter(function(value, index, arr){
// 			if (value.searchWord.includes(req.query.sw)) {
// 				searchWordMatched.push(wordsData[index])
// 			}
// 			 else {
// 				 console.log('No search matched database')
// 			}
// 		});
// 			console.log(searchWordMatched)
// 			res.send(JSON.stringify(searchWordMatched))
//   } else {
//     //Om det inte finns querystring som matchar retunera 404
// 		res.send(fakeProducts)
//   }
// })


const port = process.env.PORT || 1337;
server.listen(port, () => {
	console.log('Server listening on port ' + port);
})



const fakeProducts = [
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
]
