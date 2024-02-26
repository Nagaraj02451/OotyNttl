const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
  Name:String,
  Email : String,
  Phone : String,
  Message : String,
  Country : String,
  });

module.exports = mongoose.model('Order', OrderSchema);

