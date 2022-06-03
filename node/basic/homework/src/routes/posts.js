const express = require("express");
const router = express.Router();

/** 전체 게시글 목록 가져오기 */
// GET /post
// title, userName, createdAt(DESC)
// router.get("/post");

/** 게시글 작성 */
// POST /post/enrollment
// title, userName, content, (createdAt)

/** 게시글 조회 */
// GET /post/detail
// title, userName, createdAt, content

/** 게시글 수정 */
// UPDATE /post
// title, userName, content 중 하나 수정

/** 게시글 삭제 */
// DELETE /post/:postId

module.exports = router;
