exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Recipe 1" },
        { id: 2, name: "Recipe 2" },
        { id: 3, name: "Recipe 3" },
      ]);
    });
};
