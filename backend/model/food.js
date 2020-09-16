const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name:{type:String},
  item:{type:String},
  price:{type:Number},
   
});

module.exports = mongoose.model('FoodN', foodSchema);