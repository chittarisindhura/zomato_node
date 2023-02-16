const mongoose = require("mongoose");

const FoodItems = new mongoose.Schema({
  listid: String,
  name: String,
  foodid: String,
  fooditem: String,
  cost: String,
  description: String,
});

module.exports = mongoose.model("foodItems", FoodItems);
