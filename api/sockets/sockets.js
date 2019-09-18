module.exports = (io, server) => {
  io.on("connection", socket => {
    console.log("connected to Socket");

    socket.on("subscribe", room => {
      try {
        socket.join(room);
        console.log("[socket], join room:", room);
      } catch (e) {
        console.error("[socket], could not enter room", e);
      }
    });

    socket.on("leave", room => {
      try {
        console.log("[socket]", "LEAVING ROOM:", room);
        socket.leave(room);
      } catch (e) {
        console.error("[error] could not leave room", e);
      }
    });

    socket.on("disconnect", () => {
      console.log("removed from server");
    });

    socket.on("send", message => {
      //socket.join(message.room);

      console.log("MESSAGEROM:", message.room);
      const data = {
        user: message.user,
        time: message.time,
        message: message.message,
        room: message.room
      };

      console.log(
        "user:",
        data.user,
        "message:",
        data.message,
        "room: ",
        message.room
      );
      console.log('MESSAGE TO ROOM', message.room);
      io.sockets.to(message.room).emit("chat message", message);
    });
  });
};
