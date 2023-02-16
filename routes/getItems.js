const express = require("express");
const FoodItems = require("../models/FoodItems");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const foodItems = await FoodItems.find();
    res.status(200).json(foodItems);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
