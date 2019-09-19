module.exports = (io, server) => {
  const rooms = ["general", "party", "trade"];

  const users = [];

  io.on("connection", socket => {
    // add username to chat
    socket.rooms = 'general';

    socket.on("adduser", username => {
      socket.username = username;
      users.push(username);

      //socket.rooms = 'general';

      //users[username] = username;

      socket.join('general');

      socket.emit(
        "updatechat",
        "SERVER",
        `You are now connected to ${socket.rooms} room`
      );

      io.in(socket.rooms)
        .emit(
          "updatechat",
          "SERVER",
          socket.username + " has connected to this room" + socket.rooms
        );

      socket.emit("updaterooms", rooms, rooms[0]);

      socket.once("disconnect", () => {
        const pos = users.indexOf(socket.username);
        users.splice(pos, 1);
      });
    });

    //send
    socket.on("send", (user, data) => {
      io.in(socket.rooms).emit("updatechat", users, data);
    });

    socket.on("typing", typing => {
      return;
    });

    // Switch Rooms

    socket.on("switchRoom", newroom => {
        console.log(socket.rooms);

//  socket.to('game').emit('nice game', "let's play a game");

        socket.to(socket.rooms).emit(
          "updatechat",
          "SERVER",
          `${users} has left the ${socket.rooms} room`
        );


      socket.leave(socket.rooms);



     // socket.rooms = newroom;
      socket.join(newroom);


      socket.in(socket.rooms).emit("updatechat", "SERVER", "You are in " + newroom);


      io.in(socket.rooms).emit(
        "updatechat",
        "SERVER",
        `${users} has joined ${newroom} room`
      );

      socket.emit("updaterooms", rooms, newroom);
    });

    // on disconnect

    socket.on("disconnect", () => {
      console.log(`${users} was removed from the server`);

      delete users[socket.username];

      io.sockets.emit("updateusers", users);

      socket.broadcast.emit(
        "updatechat",
        "SERVER",
        socket.username + "has disconnected"
      );
      socket.leave(socket.rooms);
    });
  });
};
