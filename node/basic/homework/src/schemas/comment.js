const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
