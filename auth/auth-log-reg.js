const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");
const { validateUser } = require("../users/users-helpers");

// Register User
router.post("/register", (req, res) => {
  let user = req.body;

  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
      .then(result => {
        res
          .status(201)
          .json(`${result.username} has been successfully created.`);
      })
      .catch(error => {
        res.status(500).json(`There was an error with registration: ${error}.`);
      });
  } else {
    res.status(400).json({
      messsage: "Invalid credentials for account creation.",
      errors: validateResult.errors
    });
  }
});

// Login User

// jwtToken Request
function getJwtToken(username) {
  const payload = {
    username
  };

  const secret = process.env.JWT_SECRET || "token safe, token secret";

  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
