const {insertChatHistory, getAllHistory} = require("./socketDBHISTORY");
const {
  addUserOnline,
  getUsersOnline,
  deleteUserWhenLoggingOut
} = require("./socketDBUSERS");

module.exports = io => {
  const rooms = ["general", "party", "trade", "group"];

  let connections = [];
  let users = [];

  io.on("connection", socket => {
    console.log("Connected to chat");
    connections.push(socket);
    //socket.emit("getUsers", users);

    //io.emit("updateusers", users);

    // add username to chat

    socket.room = "general";

    socket.join("general");

    getAllHistory(socket.room, callback => {
      socket.emit("updatechat", callback);
    });


    getUsersOnline(callback => {
      socket.emit("getUsers", callback);
    });
    

    socket.on("adduser", username => {
      socket.username = username.name;
      socket.id = username.id;
      //users.push(username);

      socket.room = "general";
      socket.join("general");

      //socket.emit("getUsers", users);
      addUserOnline(username);

      /*
      const serverreplyToUser = {
        user: "SERVER",
        message: `You are now connected to ${socket.rooms} room`
      };

      socket.emit("updatechat", serverreplyToUser);
      */

      getUsersOnline(callback => {
        socket.emit("getUsers", callback);
      });


      const serverReplyToChat = {
        user: "SERVER",
        message: `You have connected to ${socket.room}`,
        room: socket.room
      };

      socket.emit("updatechat", serverReplyToChat);

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
        id: data.id,
        message: data.message,
        user: data.user,
        time: today,
        room: data.room,
        dateSort: Date.now()
      };

      console.log("Socket.js  Message", socket.room);
      socket.broadcast.to(socket.room).emit("updatechat", message);
      //socket.emit("getUsers", users);

      //io.in(data.room).emit("updatechat", message);

      insertChatHistory(message);
    });

    // IS TYPING

    socket.on("typing", (data, user) => {
     // socket.broadcast.emit("istyping", data, user, socket.room);
      io.in(socket.rooms).emit('istyping', data,user, socket.room)

      // socket.broadcast.to(socket.room).emit("istyping", data, user);
    });

    // Switch rooms
    socket.on("switchRoom", newroom => {
      getUsersOnline(callback => {
        socket.emit("getUsers", callback);
      });

      /*
      const messageLeft = {
        user: "SERVER",
        message: `${socket.username} has left the ${socket.rooms} room`


      socket.to(socket.rooms).emit("updatechat", messageLeft);

*/
      socket.leave(socket.room);

      socket.room = newroom;

      socket.join(newroom);

      /*
      const whichRoom = {
        user: "SERVER",
        message: `You are in ${newroom} room`
      };

      socket.emit("updatechat", whichRoom);
      */

      const serverReplyToChat = {
        user: "SERVER",
        message: `You have connected to ${socket.room}`,
        room: socket.room
      };

      socket.emit("updatechat", serverReplyToChat);

      //socket.emit("getUsers", users);

      getAllHistory(newroom, callback => {
        socket.emit("updatechat", callback);
      });
      /*
      const newRoomJoin = {
        user: "SERVER",
        message: `${socket.username} has joined ${newroom} room`,
        room: socket.room
      };

      socket.broadcast.emit("updatechat", newRoomJoin);
      */

      socket.emit("updaterooms", rooms, newroom);
    });

    socket.on("disconnect", () => {
      users = users.filter(user => user.id !== socket.id);
      //users.splice(users.indexOf(socket.username), 1);
      deleteUserWhenLoggingOut(socket.id);

      connections.splice(connections.indexOf(socket, 1));
      io.emit("updateusers", users);

      getUsersOnline(callback => {
        socket.emit("getUsers", callback);
      });

      console.log("disconnected");
    });
  });
};
