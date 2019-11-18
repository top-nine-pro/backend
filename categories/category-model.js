const db = require("../database/dbConfig");

function find() {
  return db("categories").select("id", "name", "imageUrl");
}

function findById(id) {
  return db("categories")
    .select("id", "name", "imageUrl")
    .where({ id })
    .first();
}

function findByCategory(id) {
  return db("categories")
    .select(
      "categories.id",
      "categories.name",
      "categories.imageUrl",
      "categories.user_id",
      "users.username"
    )
    .join("users", function() {
      this.on({ "users.id": "categories.user_id" });
    })
    .where({ "users.id": id });
}

function add(category) {
  return db("categories")
    .insert(category, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function remove(id) {
  return db("categories")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  findByCategory,
  add,
  remove
};
