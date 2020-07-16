const express = require("express");
const server = express();
const db = require("./data/dbHelper");
server.use(express.json());

server.get("/api/recipes", (req, res) => {
  db.getRecipes()
    .then((recipes) => {
      res.status(200).json({ data: recipes });
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/recipes/:id/shoppinglist", (req, res) => {
  db.getShoppingList(req.params.id)
    .then((shopping_list) => {
      res.status(200).json({ data: shopping_list });
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/recipes/:id/instructions", (req, res) => {
  db.getInstructions(req.params.id)
    .then((instructions) => {
      res.status(200).json({ data: instructions });
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/ingredients/:id/recipes", (req, res) => {
  db.getIngredientsRecipe(req.params.id)
    .then((recipes) => {
      res.status(200).json({ data: recipes });
    })
    .catch((err) => {
      handleError(err, res);
    });
});

function handleError(err, res) {
  console.log(err);
  res.status(500).json({ error: err });
}

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
