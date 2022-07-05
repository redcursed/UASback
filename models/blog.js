const mongoose = require("mongoose");

const mhsSchema = new mongoose.Schema({
  id: {
    require: true,
    type: String,
  },
  date: String,
  tag: String,
  author: String,
});

module.exports = mongoose.model("Blog", mhsSchema, "blog");
