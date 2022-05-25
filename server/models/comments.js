const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  comment: {
    type: String,
  },

  author: {
    ref: "user",
  },
});
