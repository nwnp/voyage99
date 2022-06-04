const express = require("express");
const router = express.Router();

const ctrlPost = require("../controllers/ctrl.post");

/** 전체 게시글 목록 가져오기 */
// GET /posts
// title, userName, createdAt(DESC)
router.get("/posts", ctrlPost.get);

/** 게시글 작성 */
// POST /posts/enrollment
// title, userName, content, (createdAt)
router.post("/posts/enrollment", ctrlPost.enrollment);

/** 게시글 조회 */
// GET /posts/detail
// title, userName, createdAt, content
router.get("/posts/detail", ctrlPost.detail);

/** 게시글 수정 */
// PATCH /posts
// title, userName, content 중 하나 수정
router.patch("/posts", ctrlPost.update);

/** 게시글 삭제 */
// DELETE /posts/:postId
router.delete("/posts/:postId", ctrlPost.remove);

module.exports = router;
