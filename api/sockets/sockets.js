module.exports = (io, server) => {
  const users = [];

  const rooms = ["general", "party", "trade"];

  io.on("connection", socket => {
    // add username to chat
    socket.room = rooms[0];

    console.log("CONNECTED TO SOCKET in channel", socket.room);

    socket.on("adduser", username => {
      socket.username = username;

      users.push(username);

      socket.room = "general";

      //users[username] = username;

      socket.join("general");

      socket.emit("updatechat","SERVER", username + " You have connected to " + socket.room + " chat");

      socket.broadcast
        .to("general")
        .emit("updatechat", "SERVER", username + " has connected to this room");

      socket.emit("updaterooms", rooms, rooms[0]);

      socket.once("disconnect", () => {
        const pos = users.indexOf(username);
        users.splice(pos, 1);
      });
    });

    //send
    socket.on("send", data => {
      io.in(socket.room).emit("updatechat", users, data);
    });

    socket.on("typing", room => {
      return;
    });

    // Switch Rooms

    socket.on("switchRoom", newroom => {
      socket.leave(socket.room);

      socket.join(newroom);
      socket.emit("updatechat", "SERVER", "You are in " + newroom);

      io.in(socket.room).emit(
        "updatechat",
        "SERVER",
        users + "has left this room"
      );

      socket.room = newroom;

      io.in(newroom).emit(
        "updatechat",
        "SERVER",
        users + "has joined the room"
      );

      socket.emit("updaterooms", rooms, newroom);
    });

    // on disconnect
    socket.on("disconnect", () => {
      console.log("removed from server");

      delete users[socket.username];

      io.sockets.emit("updateusers", users);

      socket.broadcast.emit(
        "updatechat",
        "SERVER",
        socket.username + "has disconnected"
      );
      socket.leave(socket.room);
    });
  });
};
