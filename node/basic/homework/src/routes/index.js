const express = require("express");

const router = express.Router();
const ctrlPost = require("../controllers/ctrl.post");

router.get("/", ctrlPost.get);

module.exports = router;
