const express = require('express');
const server = express();


// Konfigurera webbservern:
// middleware
// routes
// error handling
// starta servern

server.use(express.static(__dirname + '/../build/'));
server.use(express.json());

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});



server.get('/test', (request, response) => {
	console.log('Received GET request to /test');
	response.send('Testing!');
})

server.get('/game', (request, response) => {
	console.log('Received GET request to /test');
	response.send('Testing game!');
})


const port = process.env.PORT || 1337;
server.listen(port, () => {
	console.log('Server listening on port ' + port);
})


const product = {
_id:'Lägger mongodb till automatiskt',
 title: 'STRING',
 category: 'STRING',
 price: 'NUMBER',
 rating: 'NUMBER',
 image: 'STRING',
 info: 'STRING'
}

const fakeProducts = [
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
  { _id:'Lägger mongodb till automatiskt', title: 'STRING', category: 'STRING', price: 'NUMBER', rating: 'NUMBER', image: 'STRING', info: 'STRING' },
]
