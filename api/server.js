const express = require('express');
const server = express();
/*DATABASE*/
const {insertMongoDB} = require('./database/AddProduct');
const {getProductMongoDB} = require('./database/GetProduct');
const {filterByNameMongoDB} = require('./database/filterByName')
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





server.get('/api/games', (request, response) => {

  if(request.query.filter == '') {
      getProductMongoDB(data => {
        response.send(JSON.stringify(data))
      })
  } else if (request.query.filter ==  'lowestPrice') {
      console.log('inside lowest price query');
      filterProduct = {price: 1}
      filterByNameMongoDB(filterProduct, result => {
        response.send(JSON.stringify(result))
      })
  } else {
      console.log('nothing match filter');
  }


})
// function call for GetProduct from database
server.get('/api/games/', (request, response) => {
  console.log('server.get request.query: ', request );
  getProductMongoDB(data => {
    response.send(JSON.stringify(data))
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

server.use((error, request, response, next) => {
  response.status(500).send('error 500 error')
})

// server.get('/games', (request, response) => {
// 	console.log('Received GET request to /test');
// 	response.send(fakeProducts);
// })



// 3 felhantering

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
