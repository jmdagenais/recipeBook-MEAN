const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe.model');

router.route('/recipes')
  .get(function(req, res) {
    Recipe.find(function(err, recipes){
      res.json(recipes);
    });
  })
  .post(function(req, res){
    var newRecipe = new Recipe(req.body);
    console.log(newRecipe);
    // var body = req.body;
    // newRecipe.name = body.name;
    // newRecipe.description = body.description;
    // newRecipe.imagePath = body.imagePath;
    // newRecipe.ingredients = body.ingredients;
    newRecipe.save(function(err, recipe) {
      if(err) {
        console.log('Error when saving recipe: ', err);
        res.sendStatus(500);
      } else {
        res.status(201).json(recipe);
      }
    })
  });

module.exports = router;
