const express = require("express");
const Post = require("../schemas/post");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const posts = await Post.find({});
  res.render("index", { posts });
});

module.exports = router;
