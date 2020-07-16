exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { id: 1, step: "Grab 1 large bowl", instructions_id: 1 },
        { id: 2, step: "Grab 2 large whisks", instructions_id: 1 },
        { id: 3, step: "Mix eggs in the large bowl", instructions_id: 1 },
        { id: 4, step: "Grab 1 large bottle of oil", instructions_id: 2 },
      ]);
    });
};
