const mongoose = require("mongoose");

const List = new mongoose.Schema({
  listid: String,
  name: String,
  type: String,
  address: String,
  cuisine: String,
  cost: String,
  rating: String,
});
module.exports = mongoose.model("lists", List);
