const express = require('express');
const server = express();
/*DATABASE*/
//const {insertMongoDB} = require('./database/AddProduct');
const {filterByNameMongoDB} = require('./database/filterByName')
const {getSingleProductMongoDB} = require('./database/getSingleProduct')
const db = require("./secrets/keys").mongoURI;
/*DATABASE*/

/* AUTH / LOGIN */
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
require("./secrets/passport")(passport);
/* AUTH / LOGIN */

server.use(express.static(__dirname + '/../build/'));
//server.use(express.static(__dirname + '/../dist/'));


//If you want to insert, uncomment this function.
//insertMongoDB()

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*")
	next();
});
server.use(express.json())

/* Handle Auth / Login */
server.use(
	bodyParser.urlencoded({
		extended: false
	})
);

// Connect to MongoDB
mongoose
.connect(
	db,
	{ useNewUrlParser: true }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));



// ready to connect with React
// filter and get funtion for games product from MongoDB
let lastFilter = '';
let filterProduct = '';
server.get('/api/games', (request, response) => {
	let queryFilter = request.query.filter;

	if (queryFilter === '') {
		filterProduct = {}
	}
	if (queryFilter ===  'lowestPrice') {
		if(lastFilter ) {
			filterProduct = {price: 1}
		}
		else {
			filterProduct = {price: -1}
		}
	} else if(queryFilter === 'category'){
		if(lastFilter) {
			filterProduct = {category: 1}
		} else {
			filterProduct = {category: -1}
		}
	} else if(queryFilter === 'rating'){
		if(lastFilter) {
			filterProduct = {rating: 1}
		} else {
			filterProduct = {rating: -1}
		}

	}

	lastFilter = !lastFilter;

	filterByNameMongoDB(filterProduct, result => {
		response.send(JSON.stringify(result))
	})

})

// ready to connect with React
// get request for singleProduct based on ID
server.get('/api/games/product', (request, response) => {
	let queryid = request.query.id;
	let idSingleProduct = queryid;

	getSingleProductMongoDB(idSingleProduct, result => {
		response.send(JSON.stringify(result))
	})
})

/* Routing */


// Passport middleware
server.use(passport.initialize());
// Passport config
require("./secrets/passport")(passport);
// Routes
server.use("/api/users", users);

server.get('/error', (req, res) => {
	throw Error('User error');
})
// send 500 error change to 500 page later
server.use((error, request, response, next) => {
	response.status(500).send('error 500 error')
})


mongoose
.connect(
	db,
	{ useNewUrlParser: true }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));



// 4 starta serven
const port = process.env.PORT || 1337;
server.listen(port, () => {
	console.log('Server listening on port ' + port);
})
