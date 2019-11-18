const express = require("express");
const Category = require("./category-model");
const router = express.Router();

router.get("/", (req, res) => {
  Category.find()
    .then(category => {
      res.json(category);
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get categories: ${error}.` });
    });
});

module.exports = router;