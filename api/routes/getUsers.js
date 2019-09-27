const {getAllUsers} = require("../database/getUsers/getAllUSers");

module.exports = server => {
  server.get("/api/getusers", (req, res) => {
    getAllUsers(callback => {
      res.send(callback);
    });
  });
};
