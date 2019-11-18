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
    .join("users")
    .where({ "categories.user_id": id });
}

function addCategory(id, category) {
  let newCate = { ...category, "categories.id": id };
  return db("categories").insert(newCate);
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
  addCategory,
  remove
};
