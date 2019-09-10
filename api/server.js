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
require("./secrets/passport")(passport);
/* AUTH / LOGIN */


// 1 middleware
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
server.use(bodyParser.json());
server.use(passport.initialize());
/* Handle Auth / Login */
// middleware


/* Routing */
server.get('/', (request, response) => {
  console.log('Received GET request to /');
  response.send('You made a request to /');
})
server.use("/api/users", users);
server.get('/api/games', (request, response) => {
  getProductMongoDB(data => {
    response.send(JSON.stringify(data))
  })
})
/* Routing */

<<<<<<< HEAD


// 3 felhantering


=======
// 3 felhantering

>>>>>>> dev
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
