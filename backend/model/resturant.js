const mongoose = require('mongoose');

const resturantSchema = mongoose.Schema({
  name:{type:String},
  imgsrc:{type:String},
  id:{type:Number},
  price:{type:Number},
  quantity:{type:Number},
  isMostOrdered:{type:Boolean}
   
});

module.exports = mongoose.model('ResturantN', resturantSchema);