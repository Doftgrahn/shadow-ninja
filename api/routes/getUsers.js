const {getAllUsers} = require("../database/getUsers/getAllUSers");

module.exports = server => {
  server.get("/api/allusers/", (req, res) => {
    getAllUsers(callback => {
      console.log("This is how many users we have currently", callback.length);
      res.json(callback);
    });
  });
};
