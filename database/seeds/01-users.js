const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "VTe",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "VTe.Dev@top-nine.com"
        },
        {
          id: 2,
          username: "JNo",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "JNo.Dev@top-nine.com"
        },
        {
          id: 3,
          username: "NAn",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "NAn.Dev@top-nine.com"
        },
        {
          id: 4,
          username: "COr",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "COr.Dev@top-nine.com"
        },
        {
          id: 5,
          username: "Tim",
          password: bcrypt.hashSync("NotTomFromMyspace", 12),
          email: "TimNotTom.Dev@top-nine.com"
        }
      ]);
    });
};
