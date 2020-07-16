exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients_for_recipe")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients_for_recipe").insert([
        { id: 1, recipe_id: 1, ingredient_id: 2, quantity: 2.3 },
        { id: 2, recipe_id: 1, ingredient_id: 1, quantity: 1 },
        { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 1.3 },
        { id: 4, recipe_id: 2, ingredient_id: 3, quantity: 2.3 },
        { id: 5, recipe_id: 2, ingredient_id: 1, quantity: 4.3 },
      ]);
    });
};
