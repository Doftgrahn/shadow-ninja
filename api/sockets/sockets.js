const {CONNECTION, DISCONNECT, CHAT_MESSAGE} = require("./contants");

module.exports = server => {
  const io = require("socket.io")(server);

  io.on(CONNECTION, socket => {
    console.log("connected to Socket");

    socket.on(DISCONNECT, () => {
      console.log("removed from server");
    });

    socket.on(CHAT_MESSAGE, message => {
        console.log('message:' + message);
      io.emit(CHAT_MESSAGE, message);
    });


  });

};
