const express = require("express");
const router = express.Router();

const ctrlPost = require("../controllers/ctrl.post");

/** 전체 게시글 목록 가져오기 */
// GET /post
// title, userName, createdAt(DESC)
router.get("/post", ctrlPost.get);

/** 게시글 작성 */
// POST /post/enrollment
// title, userName, content, (createdAt)
router.post("/post/enrollment", ctrlPost.enrollment);

/** 게시글 조회 */
// GET /post/detail
// title, userName, createdAt, content
router.get("/post/detail", ctrlPost.detail);

/** 게시글 수정 */
// PATCH /post
// title, userName, content 중 하나 수정
router.patch("/post", ctrlPost.update);

/** 게시글 삭제 */
// DELETE /post/:postId
router.delete("/post/:postId", ctrlPost.remove);

module.exports = router;
