exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient: "Cup of flour" },
        { id: 2, ingredient: "Ounce of Water" },
        { id: 3, ingredient: "Gallon of Juice" },
      ]);
    });
};
