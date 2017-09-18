var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  _id: {type: Schema.ObjectId, auto: true},
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
