const {getAllUsers} = require("../database/getUsers/getAllUSers");

module.exports = server => {
  server.get("/api/users", (req, res) => {
    getAllUsers(callback => {
      res.send(callback);
    });
  });
};
