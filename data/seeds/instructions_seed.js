exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { id: 1, recipe_id: 2 },
        { id: 2, recipe_id: 3 },
        { id: 3, recipe_id: 1 },
      ]);
    });
};
