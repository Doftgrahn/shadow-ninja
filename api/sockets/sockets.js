const {CONNECTION, DISCONNECT, CHAT_MESSAGE} = require("./contants");

module.exports = server => {
  const io = require("socket.io")(server);

  io.on(CONNECTION, socket => {
    console.log("connected to Socket");

    socket.on(DISCONNECT, () => {
      console.log("removed from server");
    });

    socket.on(CHAT_MESSAGE, message => {
        const data = {
          user: message.user,
          time: message.time,
          message: message.message
        };


        console.log('message:',  data);
      io.emit(CHAT_MESSAGE, message);
    });


  });

};
