const {CONNECTION, DISCONNECT, CHAT_MESSAGE} = require("./contants");

module.exports = server => {
  const io = require("socket.io")(server);

  io.on(CONNECTION, socket => {
    console.log("connected");

    socket.on(DISCONNECT, () => {
      console.log("removed from server");
    });

    socket.on(CHAT_MESSAGE, data => {
      socket.broadcast.emit(CHAT_MESSAGE, data);
    });

    
  });

};
