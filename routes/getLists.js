const express = require("express");
const List = require("../models/List");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
