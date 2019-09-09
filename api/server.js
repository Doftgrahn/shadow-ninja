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
/* Handle Auth / Login */
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(bodyParser.json());
server.use(passport.initialize());
/* Handle Auth / Login */

// 2 Routes



// 3 felhantering
// 4 starta serven


server.get('/games', (request, response) => {
	console.log('Received GET request to /test');
	response.send(fakeProducts);
})

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Routes
server.use("/api/users", users);




const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
server.listen(port, () => console.log(`Server up and running on port ${port} !`));




const fakeProducts = [
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
]
