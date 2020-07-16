const db = require("./knexconfig");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients_for_recipe")
    .select("ingredients.ingredient", "quantity")
    .join(
      "ingredients",
      "ingredients_for_recipe.ingredient_id",
      "=",
      "ingredients.id"
    )
    .where("recipe_id", "=", recipe_id);
}

function getInstructions(recipe_id) {}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
