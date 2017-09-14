const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/recipes', (req, res) => {
  const recipes = [
    {
      "description": "A delicious steak with french fries",
      "imagePath": "https:\/\/www.bistrolentracte.com\/medias\/img\/articles\/steak-frites.jpg",
      "ingredients": [
        {
          "amount": 1,
          "name": "steak"
        },
        {
          "amount": 20,
          "name": "fries"
        }
      ],
      "name": "Steak frites"
    },
    {
      "description": "Yummy!",
      "imagePath": "http:\/\/tastykitchen.com\/wp-content\/uploads\/2012\/05\/Tasty-Kitchen-Blog-Easy-Chocolate-Pie-10.jpg",
      "ingredients": [
        {
          "amount": 1,
          "name": "pie crust"
        },
        {
          "amount": 1,
          "name": "chocolate mousse"
        }
      ],
      "name": "Chocolate pie"
    },
    {
      "description": "Steak - bl\u00e9 d'inde - patate",
      "imagePath": "http:\/\/www.arcticgardens.ca\/media\/cache\/19\/09\/19094a48f2d81689c574b121045b8502.jpg",
      "ingredients": [
        {
          "amount": 4,
          "name": "Pommes de terre"
        },
        {
          "amount": 1,
          "name": "ma\u00efs en canne"
        },
        {
          "amount": 1,
          "name": "steak hach\u00e9"
        }
      ],
      "name": "P\u00e2t\u00e9 chinois"
    },
    {
      "description": "Mama mia!",
      "imagePath": "http:\/\/www.simplyrecipes.com\/wp-content\/uploads\/2006\/09\/italian-sausage-spaghetti-horiz-640.jpg",
      "ingredients": [
        {
          "amount": 25,
          "name": "spaghetti"
        },
        {
          "amount": 1,
          "name": "tomato sauce"
        },
        {
          "amount": 2,
          "name": "Meat ball"
        }
      ],
      "name": "Spaghetti"
    }
  ];
  res.json(recipes);
});

module.exports = router;
