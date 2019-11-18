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

router.post("/", (req, res) => {
  const categoryData = req.body;

  Category.add(categoryData)
    .then(category => {
      res
        .status(201)
        .json({ message: "The category was successfully created." });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Failed to create new category, error: ${error}.` });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Category.remove(id)
    .then(deleted => {
      if (deleted) {
        res
          .status(200)
          .json({ message: "The category was successfully deleted." });
      } else {
        res.status(404).json({
          message: "Could not find the category with the specific id."
        });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Failed to delete the category, error: ${error}.` });
    });
});

module.exports = router;
