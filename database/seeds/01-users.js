const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "VTe",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "VTe.Dev@top-nine.com"
        },
        {
          username: "JNo",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "JNo.Dev@top-nine.com"
        },
        {
          username: "NAn",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "NAn.Dev@top-nine.com"
        },
        {
          username: "COr",
          password: bcrypt.hashSync("ReactDev", 12),
          email: "COr.Dev@top-nine.com"
        },
        {
          username: "Tim",
          password: bcrypt.hashSync("NotTomFromMyspace", 12),
          email: "TimNotTom.Dev@top-nine.com"
        }
      ]);
    });
};
