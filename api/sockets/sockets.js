// const express = require('express');
// const expressServer = require('express');
// let httpServer = require('http').createServer(expressServer);
// let io = require('socket.io')(httpServer);
// const port = 1337;
//
// // 1 middleware
// // 2 Routes
// // 3 felhantering
// // 4 starta servern
//
// expressServer.use(express.static(__dirname + '/../public'));
//
// expressServer.listen(port, () => {
//   console.log('server listen to port: ', 1337);
// })
// // io.on('connection', (client) => {
// //   client.on('subscribeToTimer', (interval) => {
// //     console.log('client is subscribing to timer with interval ', interval);
// //     setInterval(() => {
// //       client.emit('timer', new Date());
// //     }, interval);
// //   });
// // });
// //
// // const port = 1337;
// // httpServer.listen(port);
// // console.log('listening on port ', port);
//
//
//
// /*
//
// // io.on('connection', socket => {
// //   console.log('a user connected');
// // });
//
// // socket.on("disconnect", () => console.log("Client disconnected"));
//
// // socket.on('disconnect', function(){
// //   console.log('user disconnected');
// // });
//
// */
