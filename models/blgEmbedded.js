const mongoose = require("mongoose");

const blgEmbeddedSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  tag: {
    required: true,
    type: String,
  },
 
  author: [
    {
      author: String,
      desc: String,
     
    },
  ],
});

module.exports = mongoose.model("Blog", blgEmbeddedSchema, "blog");
