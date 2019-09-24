const express = require("express");
const server = express();
const httpServer = require("http").createServer(server);
const io = require("socket.io")(httpServer, {
  serveClient: process.config.env === "production" ? false : true,
  path: "/socket.io"
});


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
let sortProduct = "";
let lastFilter = "";
server.get("/api/games", (request, response) => {
  let findProduct = {};
  let queryFind = request.query.find;
  let querySort = request.query.sort;

  if (querySort === "" || querySort === {}) {
    sortProduct = {};
  } else if (querySort === "lowestPrice") {
    sortProduct = {price: 1};
  } else if (querySort === "highestPrice") {
    sortProduct = {price: -1};
  } else if (querySort === "category") {
    if (lastFilter) {
      sortProduct = {category: 1};
    } else {
      sortProduct = {category: -1};
    }
  } else if (querySort === "lowestRating") {
    sortProduct = {rating: 1};
  } else if (querySort === "highestRating") {
    sortProduct = {rating: -1};
  }

  if (queryFind === "All") {
    findProduct = {};
  } else if (queryFind !== "All") {
    findProduct = {category: queryFind};
  }

  lastFilter = !lastFilter;
  filterByNameMongoDB(sortProduct, findProduct, result => {
    response.send(JSON.stringify(result));
  });
});

// get request for singleProduct based on ID
server.get("/api/games/product", (request, response) => {
  let queryid = request.query.id;
  let idSingleProduct = queryid;

  getSingleProductMongoDB(idSingleProduct, result => {
    response.send(JSON.stringify(result));
  });
});

//add currency to account based on id

server.put("/api/addcurrency", (request, response) => {
  let queryid = request.query.id;
  let userId = queryid;
  let currency = JSON.stringify(request.body);
  editUserCurrencyMongoDB(userId, currency, result => {
    response.send(JSON.stringify(result));
  });
});

server.put("/api/addGameLibrary", (request, response) => {
  let queryid = request.query.id;
  let userId = queryid;
  let gamesToAdd = JSON.stringify(request.body);
  editUserLibraryMongoDB(userId, gamesToAdd, result => {
    response.send(JSON.stringify(result));
  });
});

/* Routing */

// Passport middleware
server.use(passport.initialize());

// Passport config
require("./secrets/passport")(passport);
// Routes
server.use("/api/users", users);

server.get('*', (req, res) => {
res.sendFile(`${__dirname}/../build/index.html`);
});


server.use((error, request, response, next) => {
  response.status(500).send("error 500 error");
  next();
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

require("./sockets/sockets")(io, server);
