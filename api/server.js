const express = require('express');
const server = express();



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
