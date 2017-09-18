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
    newRecipe.save(function(err, recipe) {
      if(err) {
        console.log('Error when saving recipe: ', err);
        res.sendStatus(500);
      } else {
        res.status(201).json(recipe);
      }
    })
  });

router.use('/recipes/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function(err, recipe){
    if(err){
      res.status(500).send(err);
    } else if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      res.status(404).send('No recipe found');
    }
  })
});

router.route('/recipes/:id')
  .get(function(req, res) {
    res.json(req.recipe);
  })
  .put(function(req, res) {
      var body = req.body;
      req.recipe.name = body.name;
      req.recipe.description = body.description;
      req.recipe.imagePath = body.imagePath;
      req.recipe.ingredients = body.ingredients;

      req.recipe.save(function(err, result) {
        if(err){
          res.status(500).send(err);
        } else {
          res.json(result);
        }
      });
    })
  .delete(function(req, res) {
    req.recipe.remove(function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(204);
      }
    });
  });

module.exports = router;
