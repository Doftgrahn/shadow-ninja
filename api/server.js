

const express = require("express");
const server = express();
const httpServer = require("http").Server(server);
const io = require("socket.io")(httpServer);

/*DATABASE*/
//const {insertMongoDB} = require('./database/AddProduct');
const {filterByNameMongoDB} = require("./database/filterByName");
const {getSingleProductMongoDB} = require("./database/getSingleProduct");
const {
  editUserCurrencyMongoDB
} = require("./database/handleProfiles/editUserCurrency");
const {
  editUserLibraryMongoDB
} = require("./database/handleProfiles/editUserGameLibrary");

const db = require("./secrets/keys").mongoURI;
/*DATABASE*/

/* AUTH / LOGIN */
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");

// middleware

server.use(express.static(`${__dirname}/../build/`));

server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

require("./secrets/passport")(passport);
/* AUTH / LOGIN */

//Socket
require("./sockets/sockets")(io, server);

//If you want to insert, uncomment this function.
//insertMongoDB()

/* Handle Auth / Login */

server.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// ready to connect with React
// filter and get funtion for games product from MongoDB
let filterProduct = '';
let lastFilter = '';
server.get('/api/games', (request, response) => {
	let findProduct = {};
	let queryFilter = request.query.filter;

	if (queryFilter === '' || queryFilter === {}) {
		filterProduct = {}
	}
	else if(queryFilter === 'lowestPrice') {
		filterProduct = {price: 1};
	}
	else if(queryFilter === 'highestPrice') {
		filterProduct = {price: -1}
	}
	else if(queryFilter === 'category'){
		if(lastFilter) {
			filterProduct = {category: 1}
		} else {
			filterProduct = {category: -1}
		}
	}
	else if(queryFilter === 'rating'){
		if(lastFilter) {
			filterProduct = {rating: 1}
		} else {
			filterProduct = {rating: -1}
		}

	}

	if(findProduct !== {}) {
		findProduct = {category: request.query.find};
	}

	lastFilter = !lastFilter;
	filterByNameMongoDB(filterProduct, findProduct, result => {
		response.send(JSON.stringify(result))
	})

})

// get request for singleProduct based on ID
server.get("/api/games/product", (request, response) => {
  let queryid = request.query.id;
  let idSingleProduct = queryid;

  getSingleProductMongoDB(idSingleProduct, result => {
    response.send(JSON.stringify(result));
  });
});

//add currency to account based on id

server.put('/api/addcurrency', ( request, response) => {
	let queryid = request.query.id;
	let userId = queryid;
	editUserCurrencyMongoDB(userId, result => {
		response.send(JSON.stringify(result))
	})
});

server.put('/api/addGameLibrary', (request, response) => {
	let queryid = request.query.id;
	let userId = queryid;
	let gamesToAdd = JSON.stringify(request.body)
	editUserLibraryMongoDB(userId, gamesToAdd, result => {
		response.send(JSON.stringify(result))
	})
});



/* Routing */

// Passport middleware
server.use(passport.initialize());

// Passport config
require("./secrets/passport")(passport);
// Routes
server.use("/api/users", users);


server.use((error, request, response, next) => {
  response.status(500).send("error 500 error");
  next()
});


mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// 4 starta serven
const port = process.env.PORT || 1337;
httpServer.listen(port, () => {
  console.log("Server listening on port " + port);
});
