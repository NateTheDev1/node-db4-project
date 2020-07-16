exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
    })
    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient").notNullable();
    })
    .createTable("ingredients_for_recipe", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id");
      tbl.float("quantity").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl
        .integer("instructions_id")
        .unsigned()
        .notNullable()
        .references("instructions.id");
      tbl.string("step").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("ingredients_for_recipe")
    .dropTableIfExists("steps");
};
