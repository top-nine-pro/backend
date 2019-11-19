exports.up = function(knex) {
  return knex.schema.createTable("categories", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable();
    tbl.string("imageUrl", 450);
    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("categories");
};
