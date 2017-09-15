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

router.route('/recipes/:id')
  .get(function(req, res) {
    Recipe.findById(req.params.id, function(err, result){
      if(err) {
        console.log('Error when fetching recipe: ', err);
        res.sendStatus(500);
      } else if(!result) {
        res.sendStatus(400);
      } else {
        res.json(result);
      }
    });
  })
  .put(function(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      if(err){
        res.status(500).send(err);
      } else {
        var body = req.body;
        recipe.name = body.name;
        recipe.description = body.description;
        recipe.imagePath = body.imagePath;
        recipe.ingredients = body.ingredients;

        recipe.save(function(err, result) {
          if(err){
            res.status(500).send(err);
          } else {
            res.json(result);
          }
        });
      }
    });
  });

module.exports = router;
