const express = require("express");
const Users = require("./users-model");
const router = express.Router();

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: "The user was successfully deleted." });
      } else {
        res
          .status(404)
          .json({ message: "Could not find the user with the specified id." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Failed to delete the user, error: ${error}.` });
    });
});

module.exports = router;
