var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  name: String,
  description: String,
  imagePath: String,
  ingredients: [
    {
      name: String,
      amount: Number
    }
  ]
});

module.exports = mongoose.model('Recipe', recipeSchema);
