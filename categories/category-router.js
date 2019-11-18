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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Category.findById(id)
    .then(category => {
      if (category) {
        res.json(category);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a category with the given id." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Failed to get categories, error: ${error}.` });
    });
});

module.exports = router;
