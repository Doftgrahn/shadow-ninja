module.exports = (io, server) => {
  const history = [];
  const rooms = ["general", "party", "trade"];

  let connections = [];
  const users = [];

  const roomCollection = [
    {
      room: "general",
      history: []
    },
    {
      room: "party",
      history: []
    },
    {
      room: "trade",
      history: []
    }
  ];

  io.on("connection", socket => {
      console.log('Connected to chat');
    connections.push(socket);
    // add username to chat
    socket.rooms = "general";
    socket.join("general")

    socket.on("disconnect", () => {
      //users.splice(users.indexOf(socket.username), 1)
      connections.splice(connections.indexOf(socket, 1));
      io.sockets.emit("updateusers", users);
      console.log('disconnected');
    });

    socket.on("adduser", username => {
      // const find = users.find(user => user === username);

      socket.username = username;
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
        message: `${username} has connected to ${socket.rooms}`
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
        message: data,
        user: socket.username,
        time: today
      };
      console.log("MSG:", data);
      io.in(socket.rooms).emit("updatechat", message);
      /*
      const test = {
        user,
        data
      };
      */

      //socket.rooms.push(test);
      /*
      roomCollection.map(data => {
        if (data.room === socket.rooms) {
          return {...data, history: [...data.history, user]};
        }
        return data;
      });

*/
      /*
      console.log('HEJ');
      */
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

      const newRoomJoin = {
        user: "SERVER",
        message: `${socket.username} has joined ${newroom} room`
      };

      socket.to(socket.rooms).emit("updatechat", newRoomJoin);

      socket.emit("updaterooms", rooms, newroom);
    });
  });
};
