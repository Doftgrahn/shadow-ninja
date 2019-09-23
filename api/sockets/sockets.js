const {insertChatHistory, getAllHistory} = require("./socketDB");

module.exports = (io, server) => {
  const rooms = ["general", "party", "trade"];

  let connections = [];
  const users = [];

  io.on("connection", socket => {
    console.log("Connected to chat");
    connections.push(socket);
    // add username to chat
    socket.rooms = "general";
    socket.join("general");

    getAllHistory(socket.rooms, callback => {
      socket.emit("updatechat", callback);
    });

    socket.on("disconnect", () => {
      users.splice(users.indexOf(socket.username), 1);

      connections.splice(connections.indexOf(socket, 1));
      io.sockets.emit("updateusers", users);

      console.log("disconnected");
    });

    socket.on("adduser", username => {
      socket.username = username.name;
      socket.userId = username.id;
      users.push(username);

      socket.join("general");
      //socket.rooms = 'general

      const serverreplyToUser = {
        user: "SERVER",
        message: `You are now connected to ${socket.rooms} room`
      };

      socket.emit("updatechat", serverreplyToUser);

      const serverReplyToChat = {
        user: "SERVER",
        message: `${username.name} has connected to ${socket.rooms}`
      };

      socket.to(socket.rooms).emit("updatechat", serverReplyToChat);

      //username + " has connected to this room " + socket.rooms

      socket.emit("updaterooms", rooms, rooms[0]);
    });

    //send
    socket.on("send", data => {
      const today = new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      });

      const message = {
        id: socket.userId,
        message: data,
        user: socket.username,
        time: today,
        room: socket.rooms
      };
      insertChatHistory(message);

      io.in(socket.rooms).emit("updatechat", message);
    });

    // IS TYPING

    socket.on("typing", data => {
      console.log(data);
      socket.emit("istyping", data);
    });

    // Switch rooms
    socket.on("switchRoom", newroom => {
      const messageLeft = {
        user: "SERVER",
        message: `${socket.username} has left the ${socket.rooms} room`
      };

      socket.to(socket.rooms).emit("updatechat", messageLeft);

      socket.leave(socket.rooms);

      socket.rooms = newroom;
      socket.join(newroom);

      const whichRoom = {
        user: "SERVER",
        message: `You are in ${newroom}`
      };

      socket.emit("updatechat", whichRoom);

      getAllHistory(socket.rooms, callback => {
        socket.emit("updatechat", callback);
        console.log(callback);
      });

      const newRoomJoin = {
        user: "SERVER",
        message: `${socket.username} has joined ${newroom} room`
      };

      socket.to(socket.rooms).emit("updatechat", newRoomJoin);

      socket.emit("updaterooms", rooms, newroom);
    });
  });
};
